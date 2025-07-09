// Immediate logging to verify script loading
console.log('Email Tracker content script loaded at:', new Date().toISOString());
console.log('Current URL:', window.location.href);

// Function to add tracking pixel to email
function addTrackingPixel(emailBody) {
  try {
    console.log('Attempting to add tracking pixel to email...');
    const trackingPixel = document.createElement('img');
    trackingPixel.style.display = 'none';
    // Generate a unique ID for this email
    const emailId = 'email_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    // Use the local server URL with the email ID
    const trackingUrl = `http://localhost:3000/track.png?id=${emailId}`;
    console.log('Generated tracking URL:', trackingUrl);
    trackingPixel.src = trackingUrl;
    trackingPixel.alt = 'Email tracking pixel';
    trackingPixel.onload = () => console.log('Tracking pixel loaded successfully');
    trackingPixel.onerror = (error) => console.error('Failed to load tracking pixel:', error);
    emailBody.appendChild(trackingPixel);
    console.log('Tracking pixel added to email body');
    return true;
  } catch (error) {
    console.error('Error adding tracking pixel:', error);
    return false;
  }
}

// Function to check if tracking is enabled
function isTrackingEnabled() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['trackingEnabled'], function(result) {
      console.log('Tracking enabled status:', result.trackingEnabled);
      resolve(result.trackingEnabled !== false);
    });
  });
}

// Function to find Gmail compose area
function findGmailComposeArea() {
  console.log('Searching for Gmail compose area...');
  // Try multiple selectors to find the compose area
  const selectors = [
    '.Am.Al.editable', // Original selector
    '[role="textbox"]', // Common Gmail compose area role
    '.aH9', // Alternative Gmail compose area class
    '[aria-label="Message Body"]', // Accessibility label
    '.editable' // Generic editable area
  ];

  for (const selector of selectors) {
    const areas = document.querySelectorAll(selector);
    if (areas.length > 0) {
      console.log(`Found compose area using selector: ${selector}`);
      return Array.from(areas);
    }
  }
  console.log('No compose area found with any selector');
  return [];
}

// Main function to initialize tracking
async function initializeTracking() {
  // Only run in the top frame
  if (window.top !== window.self) {
    console.log('Not in top frame, skipping tracking logic.');
    return;
  }
  console.log('Initializing email tracking...');
  if (!await isTrackingEnabled()) {
    console.log('Tracking is disabled');
    return;
  }

  // Check if we're on Gmail
  if (window.location.hostname.includes('mail.google.com')) {
    console.log('Gmail detected, setting up tracking...');
    
    // Initial check for compose areas
    const composeAreas = findGmailComposeArea();
    console.log(`Found ${composeAreas.length} compose areas`);
    
    composeAreas.forEach((area, index) => {
      if (!area.dataset.tracked) {
        console.log(`Adding tracking to compose area ${index + 1}`);
        area.dataset.tracked = 'true';
        if (addTrackingPixel(area)) {
          chrome.runtime.sendMessage({ type: 'emailTracked' });
        }
      }
    });

    // Observe DOM changes to detect new emails
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          console.log('DOM mutation detected, checking for new compose areas...');
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const composeAreas = findGmailComposeArea();
              composeAreas.forEach((area, index) => {
                if (!area.dataset.tracked) {
                  console.log(`Adding tracking to new compose area ${index + 1}`);
                  area.dataset.tracked = 'true';
                  if (addTrackingPixel(area)) {
                    chrome.runtime.sendMessage({ type: 'emailTracked' });
                  }
                }
              });
            }
          });
        }
      });
    });

    // Start observing the document with more specific options
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    console.log('DOM observer started');
  } else {
    console.log('Not on Gmail, tracking not initialized');
  }
}

// Initialize tracking when the page loads
console.log('Content script loaded');
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded event fired');
  initializeTracking();
});
// Also initialize immediately in case the page is already loaded
initializeTracking(); 