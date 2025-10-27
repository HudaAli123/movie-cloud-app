from __future__ import annotations

from dataclasses import dataclass, asdict
from typing import Dict, Optional

from flask import jsonify
from flask.views import MethodView


@dataclass(frozen=True)
class Movie:
    id: str
    title: str
    description: str


CATALOG: Dict[str, Movie] = {
    "123": Movie(
        id="123", title="Top Gun: Maverick", description="High-G fighter pilot action"
    ),
    "456": Movie(
        id="456", title="Sonic the Hedgehog", description="Lightning-fast blue hero"
    ),
    "789": Movie(id="789", title="A Quiet Place", description="Silence is survival"),
    "101": Movie(
        id="101", title="The Matrix", description="Welcome to the desert of the real"
    ),
}


class MovieView(MethodView):
    def get(self, movie_id: Optional[int] = None):
        if movie_id is None:
            movies_list = [{"id": m.id, "title": m.title} for m in CATALOG.values()]
            return jsonify({"movies": movies_list}), 200
        m = CATALOG.get(str(movie_id))
        if not m:
            return jsonify({"error": "not found"}), 404
        return jsonify({"movie": asdict(m)}), 200
