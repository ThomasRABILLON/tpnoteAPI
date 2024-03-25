from .app import db
from .app import app
from .models import Questionnaire, Question

@app.cli.command('create_db')
def create_db():
    db.create_all()