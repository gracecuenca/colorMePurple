from newspaper import Article

url = 'https://www.wsj.com/articles/dozens-of-people-recount-pattern-of-sexual-misconduct-by-las-vegas-mogul-steve-wynn-1516985953' # later to be replaced by active tab's url
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

print(title())
print(author())
print(keywords())
