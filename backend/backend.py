from bs4 import BeautifulSoup
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

import wikipedia

app = FastAPI()

@app.get("/count_title_references")
async def root(topic: str, debug: bool = False, parse: bool = False):
    resp = wikipedia.get_topic(topic)

    if "error" in resp:
        return {"error": resp["error"]["info"]}

    wikitext = resp["parse"]["text"]["*"].lower()

    if parse:
        search_text = BeautifulSoup(wikitext, "html.parser").text
    else:
        search_text = wikitext

    return {"count": search_text.count(topic)} |\
        ({"text": search_text} if debug else {})
