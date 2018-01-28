from newspaper import Article
import fact_check

#url = "https://politics.theonion.com/trump-insists-he-never-thought-about-firing-mueller-fe-1822461545" # later to be replaced by active tab's url
#url = "http://uspoliticalpost.com/economic_terrorism_exposed/"
#url = "http://empirenews.net/trump-begins-waging-battle-against-the-war-on-new-years-eve/"
url = "https://nypost.com/2018/01/27/cheating-still-rampant-at-disgraced-stuyvesant-school/"
article = Article(url)
article.download()
article.parse()
article.nlp()

def title():
    return article.title

def author():
    return article.authors

def keywords():
    return article.keywords

def summary():
    return article.summary

def content():
    return article.text

reliability_score = fact_check.return_score(url, author(), content())
print(reliability_score)
# print(title())
# print(author())
# print(keywords())
# print(summary())
