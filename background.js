// Initialize extension state
chrome.runtime.onInstalled.addListener(() => {
  console.log('Email Tracker extension installed/updated');
  chrome.storage.local.set({
    trackingEnabled: true,
    emailCount: 0,
    openCount: 0
  });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background script received message:', request);
  if (request.type === 'emailOpened') {
    chrome.storage.local.get(['openCount'], function(result) {
      const newCount = (result.openCount || 0) + 1;
      chrome.storage.local.set({ openCount: newCount });
      console.log('Email open count updated:', newCount);
    });
  } else if (request.type === 'emailTracked') {
    chrome.storage.local.get(['emailCount'], function(result) {
      const newCount = (result.emailCount || 0) + 1;
      chrome.storage.local.set({ emailCount: newCount });
      console.log('Email tracked count updated:', newCount);
    });
  }
}); 