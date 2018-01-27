#given news article title and website

import sqlite3
import database
import random

#finds random article given a random number on the spectrum
def find_random(article, website):
    rating = random.randrange(-10, 10, 5) / 10.0
    news_source = get_news_source(rating)


#finds alternative article on the opposite side of the spectrum
def find_alternative(article, website):
    other_rating = database.get_rating(website) * -1 #gets rating from opposite end of spectrum
    news_source = get_news_source(rating)
    

#picks random news source from database with given rating
def get_news_source(rating):
    db = sqlite3.connect("../data/ratings.db")
    c = db.cursor()
    x = c.execute("SELECT url FROM news_sources WHERE rating=? ORDER BY RANDOM() LIMIT 1", [rating])
    for line in x:
        print(line[0])
        return line[0]
    db.close()

#finds a news article given news source and topic
def get_news_article(topic, website):
    return

get_news_source(1)
