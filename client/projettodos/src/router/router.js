// router.js
import { createRouter, createWebHistory } from "vue-router";
import QuestionnaireForm from "../components/QuestionnaireForm.vue";
import QuestionnaireList from "../components/QuestionnaireList.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
