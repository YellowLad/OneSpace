from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


HOST = "127.0.0.1"
PORT = 8000
SITE_DIRECTORY = Path(__file__).resolve().parent


if __name__ == "__main__":
    handler = partial(SimpleHTTPRequestHandler, directory=SITE_DIRECTORY)
    server = ThreadingHTTPServer((HOST, PORT), handler)
    print(f"OneWorld Sovereign is available at http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
    finally:
        server.server_close()
