from flask import Flask, render_template, url_for

# Create the APPlication.
APP = Flask(__name__)

linknames = {"index":"Startseite", "zunahme":"Zunahme"}

@APP.route('/')
def index():
    """ Home page
    """
    return render_template('index.html', title = "Startseite", linknames = linknames)


@APP.route('/zunahme')
def zunahme():
    return render_template('zunahme.html',pagename = "zunahme", linknames = linknames)


if __name__ == '__main__':
    APP.debug=True
    APP.run()
