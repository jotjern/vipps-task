from functools import lru_cache

import requests
session = requests.Session()

# Cache up to 512 responses
@lru_cache(maxsize=0)
def get_topic(title):
    return session.get("https://en.wikipedia.org/w/api.php", params={
        "action": "parse", "section": 0, "prop": "text", "format": "json",
        "page": title
    }).json()
