from .app import db
from flask_restful import Resource
from flask import request

class Questionnaire(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return "<Questionnaire (%d) %s>" % (self.id, self.name)

    def to_json(self):
        json = {
            'id': self.id,
            'name': self.name,
        }
        return json


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    questionType = db.Column(db.String(120))
    questionnaire_id = db.Column(db.Integer, db.ForeignKey('questionnaire.id'))
    questionnaire = db.relationship("Questionnaire", backref=db.backref("questions", lazy="dynamic"))

    def __init__(self, title, questionType, questionnaire):
        self.title = title
        self.questionType = questionType
        self.questionnaire = questionnaire

    def __repr__(self):
        return "<Question (%d) %s>" % (self.id, self.title)

    def to_json(self):
        json = {
            'id': self.id,
            'title': self.title,
            'questionType': self.questionType,
            'questionnaire': self.questionnaire.to_json(),
        }
        return json


class API_Questionnaire(Resource):
    def get(self):
        questionnaire = Questionnaire.query.all()
        return [q.to_json() for q in questionnaire]

    def post(self):
        q = Questionnaire(request.json['name'])
        db.session.add(q)
        db.session.commit()
        return q.to_json(), 201

class API_Questionnaire_by_id(Resource):
    def get(self, id):
        q = Questionnaire.query.get_or_404(id)
        return q.to_json()
    
    def put(self, id):
        q = Questionnaire.query.get_or_404(id)
        q.name = request.json['name']
        db.session.commit()
        return q.to_json()

    def delete(self, id):
        q = Questionnaire.query.get_or_404(id)
        db.session.delete(q)
        db.session.commit()
        return 'Good', 204
    
class API_Question(Resource):
    def get(self, id):
        q = Question.query.get_or_404(id)
        return q.to_json()
    
    def put(self, id):
        q = Question.query.get_or_404(id)
        q.title = request.json['title']
        db.session.commit()
        return q.to_json()

    def delete(self, id):
        q = Question.query.get_or_404(id)
        db.session.delete(q)
        db.session.commit()
        return 'Good', 204


class API_Question_by_questionnaire_id(Resource):
    def get(self, id):
        q = Questionnaire.query.get_or_404(id)
        return [q.to_json() for q in q.questions]

    def post(self, id):
        q = Questionnaire.query.get_or_404(id)
        question = Question(request.json['title'], request.json['questionType'], q)
        db.session.add(question)
        db.session.commit()
        return question.to_json(), 201