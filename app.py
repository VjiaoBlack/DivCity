from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def login():
    return render_template("game.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=5000)
