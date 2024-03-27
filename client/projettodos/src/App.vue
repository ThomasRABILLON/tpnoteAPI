<template>
  <div>
    <QuestionnaireList @response="(msg) => console.log(msg)" />
  </div>
</template>

<script setup>
import QuestionnaireList from "./components/QuestionnaireList.vue";
import QuestionForm from "./components/QuestionForm.vue";
import { getAllQuestionnaires, getQuestionnaire, createQuestionnaire, updateQuestionnaire, deleteQuestionnaire } from "./services/Questionnaire.js";

const q = deleteQuestionnaire(5);

</script>

<style scoped>
/* Vos styles ici */
</style>
