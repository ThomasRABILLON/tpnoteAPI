import { getAllQuestionnaires, getQuestionnaire } from "../services/Questionnaire";
import { getAllQuestions } from "../services/Question";

import Questionnaire from "../Questionnaire";
import Question from "../Question";

export default class QuestionnaireProvider {
    static async getAllQuestionnaires() {
        const questionnaires = await getAllQuestionnaires();
        let questionnaireList = [];
        let questionList = [];
        let questions;
        questionnaires.forEach(async questionnaire => {
            questions = await getAllQuestions(questionnaire.id);
            questionList = [];
            questions.forEach(question => {
                questionList.push(new Question(question.id, question.title, question.questionType));
            });
            questionnaireList.push(new Questionnaire(questionnaire.id, questionnaire.name, questionList));
        })
        return questionnaireList;
    }

    static async getQuestionnaireById(id) {
        const questionnaire = await getQuestionnaire(id);
        let questionList = [];
        let questions = await getAllQuestions(id);
        questions.forEach(question => {
            questionList.push(new Question(question.id, question.title, question.questionType));
        });
        return new Questionnaire(questionnaire.id, questionnaire.name, questionList);
    }
}