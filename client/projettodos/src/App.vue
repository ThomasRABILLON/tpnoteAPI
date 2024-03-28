<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import QuestionnaireProvider from './models/provider/QuestionnaireProvider'

const questionnaire1 = await QuestionnaireProvider.getQuestionnaireById(2)
const questionnaire2 = await QuestionnaireProvider.getQuestionnaireById(3)

console.log(questionnaire1)
console.log(questionnaire2)
</script>

<style scoped>
/* Vos styles ici */
</style>
