from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource

import os

app = Flask( __name__ )
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + os.path.join(os.path.dirname(__file__), "database/quiz.db")
db = SQLAlchemy(app)