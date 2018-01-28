import database
import json
import Algorithmia
import newspaper

def check_database(url):
    source = newspaper.build(url)
    url = database.strip(url)
    print(url)
    for category in source.category_urls():
        category = database.strip(category)
        for site in database.fake_news_urls():
            if url == site or category == site:
                print("site found is " + site)
                return -0.5
    return 0.0

def check_authors(authors):
    print(authors)
    if len(authors) < 1:
        return -0.2
    for author in authors:
        words = author.split()
        if len(words) > 3 or len(words) < 2:
            return -0.2
    return 0.0

def check_sentiment(content):
    input = {
      "document": content
    }
    client = Algorithmia.client('simcwZzYmiMiLWsd0GtW/k4pLf51')
    algo = client.algo('nlp/SentimentAnalysis/1.0.4')
    sentiment = float(algo.pipe(input).result[0]['sentiment'])/2.0
    print("sentiment is " + str(sentiment))
    if sentiment < 0.0:
        return sentiment
    return 0

def return_score(url, authors, content):
    score = 1.0
    score += check_database(url)
    score += check_authors(authors)
    score += check_sentiment(content)
    if score < 0.0:
        score = 0.0
    return score
