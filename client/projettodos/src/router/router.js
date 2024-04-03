// router.js
import { createRouter, createWebHistory } from "vue-router";
import QuestionnaireForm from "../components/QuestionnaireForm.vue";
import QuestionnaireList from "../components/QuestionnaireList.vue";
import Questionnaire from "../components/QuestionnaireItem.vue";
import Question from "../components/QuestionForm.vue";
import ModifyQuestionnaire from "../components/ModifQuestionnaire.vue";

const routes = [
  {
    path: "/",
    name: "/home",
    component: QuestionnaireList,
  },
  {
    path: "/create-questionnaire",
    name: "CreateQuestionnaire",
    component: QuestionnaireForm,
  },
  {
    path: "/questionnaire/:id",
    name: "Questionnaire",
    component: Questionnaire,
  },
  {
    path: "/question",
    name: "Question",
    component: Question,
  },
  {
    path: "/edit-questionnaire/:id",
    name: "ModifyQuestionnaire",
    component: ModifyQuestionnaire,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
