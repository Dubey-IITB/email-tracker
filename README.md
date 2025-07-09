# 📧 Email Tracker Chrome Extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Extension-Available-brightgreen?style=for-the-badge&logo=google-chrome)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-Active-success.svg?style=for-the-badge)]()

> A powerful Chrome extension that helps you track email opens and interactions with detailed analytics and privacy controls.

## ✨ Features

- 🔍 **Email Open Tracking** - Track when your emails are opened using invisible tracking pixels
- 📊 **Real-time Analytics** - View comprehensive statistics of tracked emails and opens
- 🎛️ **Privacy Controls** - Toggle tracking on/off with a single click
- 📧 **Gmail Integration** - Seamlessly works with Gmail (extensible to other providers)
- 🔒 **Local Storage** - All data stored locally in Chrome's secure storage
- 📱 **User-friendly UI** - Clean and intuitive popup interface
- 🚀 **Lightweight** - Minimal performance impact on your browsing

## 🚀 Quick Start

### Prerequisites

- Google Chrome browser
- Node.js 18+ (for the tracking server)
- Basic knowledge of Chrome extensions

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dubey-IITB/email-tracker.git
   cd email-tracker
   ```

2. **Set up the tracking server**
   ```bash
   cd server
   npm install
   npm start
   ```

3. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the extension directory
   - The Email Tracker icon should appear in your Chrome toolbar

4. **Configure the tracking server URL**
   - Open `content.js` and replace `http://localhost:3000/track.png` with your actual tracking server URL
   - If running locally, the default URL should work

## 📁 Project Structure

```
email-tracker/
├── 📄 manifest.json          # Extension configuration
├── 🖥️ popup.html             # Extension popup UI
├── ⚡ popup.js               # Popup functionality
├── 🔄 background.js          # Background processes
├── 📧 content.js             # Email page interactions
├── 🖼️ track.png              # Tracking pixel image
├── 🖼️ images/                # Extension icons and assets
├── 🖥️ server/                # Tracking server backend
│   ├── 📄 index.js           # Server implementation
│   ├── 📄 package.json       # Node.js dependencies
│   └── 📁 node_modules/      # Installed packages
└── 📄 README.md              # This file
```

## 🛠️ Development

### Extension Components

- **`manifest.json`**: Defines the extension's metadata, permissions, and structure
- **`popup.html/js`**: User interface for controlling tracking settings and viewing stats
- **`background.js`**: Handles background tasks and extension lifecycle
- **`content.js`**: Injects tracking pixels into email composition pages
- **`server/`**: Node.js backend for processing tracking pixel requests

### Local Development

1. **Start the tracking server**
   ```bash
   cd server
   npm install
   npm start
   ```

2. **Load the extension**
   - Follow the installation steps above
   - Use Chrome DevTools to debug the extension

3. **Make changes**
   - Edit the extension files
   - Reload the extension in `chrome://extensions/`
   - Test your changes

## 🔧 Configuration

### Tracking Server Setup

The extension requires a tracking server to handle pixel requests. The included server:

- Runs on Node.js with Express
- Logs tracking events to console
- Can be extended to store data in a database
- Supports CORS for cross-origin requests

### Customization

- **Tracking URL**: Update the tracking pixel URL in `content.js`
- **UI Styling**: Modify `popup.html` for custom appearance
- **Analytics**: Extend the server to store tracking data
- **Email Providers**: Add support for other email services

## 🔒 Privacy & Security

### Data Protection

- ✅ **Local Storage Only** - All tracking data stored locally in Chrome
- ✅ **No Email Content Access** - Extension never reads email content
- ✅ **User Control** - Tracking can be disabled at any time
- ✅ **Transparent** - Clear indication when tracking is active

### Privacy Features

- Tracking is disabled by default
- Users have full control over tracking settings
- No personal information is transmitted
- All data remains on the user's device

## 📊 Usage

1. **Enable Tracking**
   - Click the Email Tracker extension icon
   - Toggle the tracking switch to "ON"

2. **Compose Email**
   - Open Gmail and compose a new email
   - The extension automatically adds tracking pixels

3. **View Analytics**
   - Click the extension icon to view tracking statistics
   - See total emails sent and opens tracked

4. **Disable Tracking**
   - Toggle the switch to "OFF" to stop tracking

## 🚀 Future Enhancements

- [ ] **Multi-provider Support** - Extend to Outlook, Yahoo, and other email services
- [ ] **Advanced Analytics** - Detailed charts and reporting
- [ ] **Link Click Tracking** - Track when recipients click links in emails
- [ ] **Export Functionality** - Export tracking data to CSV/JSON
- [ ] **Email Templates** - Pre-configured tracking templates
- [ ] **Real-time Notifications** - Instant alerts when emails are opened
- [ ] **Dashboard** - Web-based analytics dashboard
- [ ] **API Integration** - Connect with external analytics platforms

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Chrome Extensions API documentation
- Gmail's email composition interface
- The open-source community for inspiration and tools

## 📞 Support

If you encounter any issues or have questions:

- 📧 **Email**: vishwatdubey2@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/Dubey-IITB/email-tracker/issues)
- 📖 **Documentation**: Check this README and inline code comments

---

<div align="center">
  <p>Made with ❤️ by the Email Tracker Team</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
