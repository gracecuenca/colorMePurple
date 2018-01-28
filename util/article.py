from newspaper import Article
import fact_check

url = "https://www.wsj.com/articles/dozens-of-people-recount-pattern-of-sexual-misconduct-by-las-vegas-mogul-steve-wynn-1516985953" # later to be replaced by active tab's url
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
print(title())
print(author())
print(keywords())
print(summary())
