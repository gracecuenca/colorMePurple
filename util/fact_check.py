import database
import json
import Algorithmia


# f = open("keys.txt", 'rU')
# keys = json.loads(f.read())
# f.close()
#
# client = textapi.Client(keys["id"], keys["key"])

def check_database(url):
    for site in database.fake_news_urls():
        if database.strip(url) == site:
            return -0.5

def check_authors(authors):
    for author in authors:
        if len(author) > 3 or len(author) < 2:
            return -0.2

def check_sentiment(content):
    input = {
      "document": content
    }
    client = Algorithmia.client('simcwZzYmiMiLWsd0GtW/k4pLf51')
    algo = client.algo('nlp/SentimentAnalysis/1.0.4')
    sentiment = float(algo.pipe(input).result[0]['sentiment'])
    print(sentiment)
    return sentiment

def return_score(url, authors, content):
    score = 1.0
    score -= check_database(url)
    score -= check_authors(authors)
    score += check_sentiment(content)
    if score < 0.0:
        score = 0.0
    return score

check_sentiment('DAVOS—Maintaining that the notion didn’t even cross his mind, President Trump reportedly insisted Friday that he never once thought about firing Robert Mueller, feeding him to a pack of rabid dogs, and mounting his head in the Oval Office as a trophy. “At no point did I ever consider firing Mr. Mueller, tossing his body to snarling, mangy hounds, and having his head stuffed and mounted front and center above the Oval Office fireplace,” said Trump, dismissing several reports that he had ordered the special counsel to be terminated from his post and torn limb from limb by starving Rottweilers before nailing his skull to a wooden plaque, but backed off when a top White House lawyer threatened to quit. It’s also totally ridiculous to think that I would ever want Mueller gone for good, boiled alive, and chopped up into bloody chunks. The stories you’re hearing about me trying to get rid of Mueller and then gutting him with a rusty ice pick are absolutely not true.')
