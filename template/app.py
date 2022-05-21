from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def init():
  return render_template('index.html')
  
if __name__ == 'main':
  app.run()
