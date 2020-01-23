from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from . import main

@main.route('/')
@main.route('/index')
@main.route('/index/<uname>')
def index(uname):

    '''
    View root page function that returns the index page and its data
    '''
    user = Userr.query.filter_by(username = name).first()

    return render_template('index.html',user = user)