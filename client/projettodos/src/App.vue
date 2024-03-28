<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {
  getAllQuestionnaires,
  getQuestionnaire,
  createQuestionnaire,
  updateQuestionnaire,
  deleteQuestionnaire,
} from "./services/Questionnaire.js";

const q = deleteQuestionnaire(5);
</script>

<style scoped>
/* Vos styles ici */
</style>
