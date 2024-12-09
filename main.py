from flask import Flask, url_for, render_template

app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/contatos")
def contatos(): # No "URL_FOR (que está sendo utilizado lá no html) nós usamos o nome da função como parâmetro"
    return render_template("contato.html")


if __name__ == "__main__":
    app.run(debug=True)