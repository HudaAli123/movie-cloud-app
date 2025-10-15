"""Flask app entrypoint (refactored)."""
from __future__ import annotations
from flask import Flask
from flask_cors import CORS
from .movies import api as movies_blueprint

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(movies_blueprint, url_prefix="")
    return app

# Export a module-level WSGI application for Gunicorn ("backend:app")
app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
