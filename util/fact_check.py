import database
import json
import Algorithmia


# f = open("keys.txt", 'rU')
# keys = json.loads(f.read())
# f.close()
#
# client = textapi.Client(keys["id"], keys["key"])

score = 1; # reliability score
notes = "";

def checkDatabase(url):
    for site in database.fake_news_urls():
        if database.strip(url) == site:
            score -= .5
            return

def checkAuthors(authors):
    for author in authors:
        if len(author) > 3 or len(author) < 2:
            score -= .2

def checkSentiment(content):
    input = {
      "document": content
    }
    client = Algorithmia.client('simcwZzYmiMiLWsd0GtW/k4pLf51')
    algo = client.algo('nlp/SentimentAnalysis/1.0.4')
    sentiment = algo.pipe(input).result[0]['sentiment'])/4
    score += sentiment

def returnScore(url, authors, content):
    checkDatabase(url)
    checkAuthors(authors)
    checkSentiment(content)
    if score < 0:
        score = 0
    return score

checkSentiment('DAVOS—Maintaining that the notion didn’t even cross his mind, President Trump reportedly insisted Friday that he never once thought about firing Robert Mueller, feeding him to a pack of rabid dogs, and mounting his head in the Oval Office as a trophy. “At no point did I ever consider firing Mr. Mueller, tossing his body to snarling, mangy hounds, and having his head stuffed and mounted front and center above the Oval Office fireplace,” said Trump, dismissing several reports that he had ordered the special counsel to be terminated from his post and torn limb from limb by starving Rottweilers before nailing his skull to a wooden plaque, but backed off when a top White House lawyer threatened to quit. It’s also totally ridiculous to think that I would ever want Mueller gone for good, boiled alive, and chopped up into bloody chunks. The stories you’re hearing about me trying to get rid of Mueller and then gutting him with a rusty ice pick are absolutely not true.')
