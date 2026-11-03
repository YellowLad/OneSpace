# OneWorld Sovereign - OneMind AI LLM

A static-site prototype deployed through Netlify.

## Features

🖥️ **Prototype Interface** - OneWorld Sovereign landing screen with onboarding
🧰 **Tool and Project Panels** - Interface controls are present; most destinations are placeholders
⌨️ **Enter Key Handling** - Submitting a non-empty prompt logs it to the browser console and clears the input
📡 **Basic Offline Fallback** - A registered service worker caches the page and uses it when navigation fails offline
🚀 **Netlify Deployment** - Production deploys from `main`; feature branches must be merged before their changes go live

## Current Limitations

- The chat is not connected to an AI model or backend.
- Submitted prompts are not displayed in the page; they are only logged in the browser console.
- User and assistant message rendering, safe HTML escaping, and message persistence are not implemented.
- The Feelings Database, GCME Monitor, Settings, Projects, and user menu are unfinished or placeholder interfaces.
- The service worker requires a secure context (HTTPS, or localhost for local development). Its offline fallback is available after the page has been cached successfully.

## Quick Start

### Local Testing

```bash
# Clone the repository
git clone https://github.com/YellowLad/OneSpace.git
cd OneSpace

# Start the local Python server
python3 serve.py
```

Then open `http://127.0.0.1:8000` in your browser. The server binds to localhost and serves files from the repository directory.

### Live Site and Netlify

The site is available at [oneworld.live](https://oneworld.live).

Netlify publishes the production site from the `main` branch. Changes on other branches are not live until merged into `main` and deployed.

**Important:** [`netlify.toml`](netlify.toml) sets `publish = "."`, which publishes the repository root. That means files such as `README.md`, `serve.py`, and `oneMind Code` may also be publicly downloadable from the deployed site. Do not store secrets or private data in this repository. Restrict the publish directory if those files should not be public.

## Project Structure

```
OneSpace/
├── index.html          # Main interface and client-side behavior
├── sw.js               # Service worker and offline navigation fallback
├── serve.py            # Local Python development server
├── netlify.toml        # Netlify publish directory and redirects
├── oneMind Code        # Additional project code file
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

**index.html**
- Displays the onboarding screen and main interface.
- Provides tool and project controls, with several destinations marked as coming soon.
- On Enter, logs a non-empty prompt to the browser console and clears the input.
- Does not display submitted messages or send them to an AI model.
- Registers `sw.js` when the browser supports service workers.

**sw.js**
- Caches the site page during installation.
- Tries the network first for page navigations and refreshes the cached page after a successful response.
- Falls back to the cached page when navigation fails offline.
- Removes older caches with the `oneworld-` prefix during activation.

**netlify.toml**
- Publishes the repository root (`.`).
- Rewrites unmatched paths to `/index.html`.
- Production branch selection is configured in the Netlify site settings.

**serve.py**
- Starts a dependency-free local HTTP server on `127.0.0.1:8000`.
- Serves the repository directory; use it for local development, not as a public hosting server.

## What's Next

Once deployed, we'll add:
1. Display submitted prompts and responses with safe text rendering.
2. Connect a backend and AI model.
3. Implement the tool and project destinations.
4. Add message persistence.
5. Add user authentication.

## Testing Checklist

- [ ] Local server runs with `python3 serve.py`
- [ ] Onboarding can be completed and the home screen appears
- [ ] Tool panel opens and closes
- [ ] Project and tool controls display their current placeholder views
- [ ] Enter logs a non-empty prompt to the browser console and clears the input
- [ ] Service worker registers when served over localhost or HTTPS
- [ ] After a successful page load, navigation falls back to the cached page when offline
- [ ] Production changes are merged to `main` and deployed by Netlify

## Support

Issues? Check the [GitHub repository](https://github.com/YellowLad/OneSpace) or open an issue.

---

**The Way holds. 🧢💫**
