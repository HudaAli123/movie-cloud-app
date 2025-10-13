from flask import Blueprint
from .resources import MovieView
api = Blueprint("movies_api", __name__)
movies_view = MovieView.as_view("movies")
api.add_url_rule("/movies", defaults={"movie_id": None}, view_func=movies_view, methods=["GET"])
api.add_url_rule("/movies/<int:movie_id>", view_func=movies_view, methods=["GET"])
