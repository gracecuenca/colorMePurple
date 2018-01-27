import sqlite3

#ratings
left = -1
lean_left = -0.5
center = 0
lean_right = 0.5
right = 1

def add_history(website, url, rating):
    db = sqlite3.connect("data/ratings.db")
    c = db.cursor()
    vals = [website, url, rating]
    x = c.execute("INSERT INTO news_sources VALUES(?, ?, ?)", vals)
    print"\n\nhere\n\n"
    db.commit()
    db.close()

#strings query to get website and finds rating
def get_rating(url):
    www_index = url.find("www.")
    input = url
    if(www_index != -1):
        input = url[www_index + 4: ] #returns url w/o www.
    https_index = input.find("https://")
    if(https_index != -1):
        input = input[https_index + 8: ]
    slash_index = input.find("/")
    if(slash_index != -1):
        input = input[ : slash_index] # returns only main domain
    #retrieve ratings from cleaned domain
    print(input)
    db = sqlite3.connect("data/ratings.db")
    c = db.cursor()
    x = c.execute("SELECT rating FROM news_sources WHERE url LIKE ?", [input])
    for y in x:
        print("+++++++++++++" + str(y[0]))
        return(y[0])
    print("doesnt work")
    return "uggg"

#get_rating("https://www.judicialwatch.org/press-room/press-releases/jw-pres-tom-fitton-speech-clinton-scandals-emails-benghazi-trump-dossier/")
#get_rating("https://politics.theonion.com/trump-insists-he-never-thought-about-firing-mueller-fe-1822461545")

'''
# execute this file to create the initial database
if __name__ == '__main__':
    # initialize database
    db = sqlite3.connect("data/ratings.db")
    c = db.cursor()
    # initial table for news sources
    c.execute("CREATE TABLE news_sources (website TEXT, url TEXT, rating FLOAT)")
    #table for news history of user
    c.execute("CREATE TABLE history (website TEXT, date TEXT, rating FLOAT)")
    #table for fake news
    c.execute("CREATE TABLE fake_news (website TEXT, url TEXT)")
    #table for agree/disagree button
    #agree_disagree: agree = 0; disagree = 1
    c.execute("CREATE TABLE crowdsource (website TEXT, agree_disagree INT)")
    # save and close database
    db.commit()
    db.close()

#initial database
add_history("ABC News", "abcnews.go.com", lean_left)
add_history("Al Jazeera", "aljazeera.com" , center)
add_history("American Spectator", "spectator.org", right)
add_history("Associated Press", "apnews.com" , center)
add_history("BBC News", "bbc.com" , center)
add_history("Bloomberg", "bloomberg.com" , center)
add_history("Breitbart News", "breitbart.com", right)
add_history("Buzzfeed", "buzzfeed.com", lean_left)
add_history("CBN","cbn.com" , right)
add_history("CBS News", "cbsnews.com", lean_left)
add_history("Chicago Tribune", "chicagotribune.com", center)
add_history("Christian Science Monitor", "csmonitor.com" , center)
add_history("CNN (Web News)", "cnn.com", center)
add_history("CNN - Editorial", "cnn.com/opinions" , left)
add_history("Cook Report", "cookpolitical.com", center)
add_history("Daily Beast", "thedailybeast.com", left)
add_history("Daily Kos", "dailykos.com", left)
add_history("Democracy Now", "democracynow.org", left)
add_history("FactCheck.org", "factcheck.org", center)
add_history("Fiscal Times", "thefiscaltimes.com", lean_right)
add_history("FiveThirtyEight", "fivethirtyeight.com", center)
add_history("Forbes", "forbes.com" , center)
add_history("Foreign Affairs", "foreignaffairs.com", center)
add_history("Fox News", "foxnews.com", lean_right)
add_history("How Do We Fix It?", "howdowefixit.me", center)
add_history("HuffPost", "huffingtonpost.com", left)
add_history("Independent Journal Review", "ijr.com", lean_right)
add_history("Judicial Watch", "judicialwatch.org", lean_right)
add_history("Los Angeles Times", "latimes.com", lean_left)
add_history("Media Matters", "mediamatters.org", left)
add_history("Media Research Center", "mrc.org", right)
add_history("Mediaite", "mediaite.com", lean_left)
add_history("Mother Jones", "motherjones.com", left)
add_history("National Journal", "nationaljournal.com", center)
add_history("National Review", "nationalreview.com", right)
add_history("NBCNews.com", "nbcnews.com", lean_left)
add_history("New Republic", "newrepublic.com", left)
add_history("New York Post", "nypost.com", right)
add_history("New York Times", "nytimes.com", lean_left)
add_history("Newsmax", "newsmax.com", right)
add_history("Newsweek", "newsweek.com", lean_left)
add_history("NPR Editorial", "npr.org/sections/opinion" , lean_left)
add_history("NPR News", "npr.org", center)
add_history("Politico", "politico.com", center)
add_history("RealClearPolitics", "realclearpolitics.com", center)
add_history("Reason", "reason.com", lean_right)
add_history("Reuters", "reuters.com", center)
add_history("Salon", "salon.com", left)
add_history("Slate", "slate.com", lean_left)
add_history("The Atlantic", "theatlantic.com", lean_left)
add_history("The Daily Caller", "dailycaller.com", right)
add_history("The Federalist", "thefederalist.com", lean_right)
add_history("The Hill", "thehill.com", center)
add_history("The Libertarian Republic", "thelibertarianrepublic.com", lean_right)
add_history("The Weekly Stanford", "stanforddaily.com", right)
add_history("TheBlaze.com", "theblaze.com", right)
add_history("ThinkProgress", "thinkprogress.org", left)
add_history("Time Magazine", "time.com", left)
add_history("Townhall", "townhall.com", right)
add_history("U.S. News & World Report", "usnews.com", lean_left)
add_history("USA TODAY", "usatoday.com", center)
add_history("Vox", "vox.com", lean_left)
add_history("Wall Street Journal- Editorial", "wsj.com/news/opinion", right)
add_history("Wall Street Journal- News", "wsj.com", center)
add_history("Washington Examiner", "washingtonexaminer.com", right)
add_history("Washington Post", "washingtonpost.com", lean_left)
add_history("Watchdog.org", "watchdog.org", lean_right)
add_history("Western Journalism", "westernjournal.com", right)
'''
