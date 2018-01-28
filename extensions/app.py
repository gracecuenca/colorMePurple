from flask import Flask, render_template, request, redirect, flash, Markup, url_for, session
import requests, os, json
import random

app = Flask(__name__)
app.secret_key = os.urandom(128)

# Landing page; displays the home page
@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("gradient.html")

@app.route("/doughnut", methods=["GET", "POST"])
def doughnut():
    print("doughnut")
    return render_template("doughnut.html")

@app.route("/line", methods=["GET", "POST"])
def line():
    return render_template("line.html")

@app.route("/bubble", methods=["GET", "POST"])
def bubble():
    return render_template("coordinate-gradient.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
