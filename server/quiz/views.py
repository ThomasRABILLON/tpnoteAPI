from .app import api, app
from .models import API_Questionnaire, API_Questionnaire_by_id, API_Question, API_Question_by_questionnaire_id
from flask import jsonify, abort, make_response

api.add_resource(API_Questionnaire, '/api/questionnaires')
api.add_resource(API_Questionnaire_by_id, '/api/questionnaires/<int:id>')
api.add_resource(API_Question, '/api/questions/<int:id>')
api.add_resource(API_Question_by_questionnaire_id, '/api/questionnaires/<int:id>/questions')


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad request'}), 400)