# OneWorld - OneMind AI LLM

A production-ready chat interface optimized for offline use and instant deployment.

## Features

✨ **Single-Height Input Bar** - Fixed 56px height with proper alignment  
💬 **Working Chat Interface** - User and assistant messages with auto-scroll  
🔄 **Enter Key Support** - Press Enter to send messages  
📱 **Mobile Responsive** - Works seamlessly on all devices  
🚀 **Netlify Ready** - One-click deployment  
⚡ **Offline Support** - Service Worker caching  
🔒 **XSS Protected** - Secure HTML escaping  

## Quick Start

### Local Testing

```bash
# Clone the repository
git clone https://github.com/YellowLad/OneSpace.git
cd OneSpace

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use Node.js
npx http-server
```

Then open `http://localhost:8000` in your browser.

### Deploy to Netlify

**Automatic Deployment:**
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Netlify auto-deploys on every push!

**Manual Deployment:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Project Structure

```
OneSpace/
├── index.html          # Main chat application
├── sw.js               # Service Worker for offline support
├── netlify.toml        # Netlify configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

**index.html**
- Full chat interface with fixed input bar
- User and assistant message display
- Enter key and button send functionality
- Auto-scroll to latest message
- XSS protection with HTML escaping

**sw.js**
- Caches assets on first visit
- Enables offline functionality
- Fallback to index.html for navigation

**netlify.toml**
- Configures static site deployment
- SPA routing with /* redirects
- Production-ready build settings

## Features Explained

### Fixed Input Bar
- Single 56px height (no more overlapping)
- Flex layout for perfect alignment
- Responsive button with hover effects

### Chat Messages
- Gold gradient for user messages
- Dark background for assistant messages
- Proper spacing and styling
- Scrollable chat area

### Accessibility
- Proper semantic HTML
- Clear visual hierarchy
- Keyboard support (Enter to send)
- Service Worker fallbacks

## What's Next

Once deployed, we'll add:
1. Real API backend integration
2. Onboarding flow
3. Dock tools
4. Message persistence
5. User authentication

## Testing Checklist

- [ ] Local server runs without errors
- [ ] Chat input bar displays correctly (56px height)
- [ ] Messages send on button click
- [ ] Messages send on Enter key press
- [ ] Auto-scroll works on new messages
- [ ] Hover effects work on button
- [ ] Mobile layout is responsive
- [ ] Service Worker registers (DevTools)
- [ ] Works offline (after first visit)

## Support

Issues? Check the [GitHub repository](https://github.com/YellowLad/OneSpace) or open an issue.

---

**The Way holds. 🧢💫**
