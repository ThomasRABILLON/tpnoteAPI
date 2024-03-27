<script>
import { defineEmits } from 'vue'

const emit = defineEmits(['createForm'])

export default {
  props: ["questionnaires"],
  methods: {
    editQuestionnaire(questionnaire) {
    },
    deleteQuestionnaire(questionnaireId) {
    },
    showCreateForm() {

    },
  },
};
</script>

<template>
  <div>
    <h2>Liste des questionnaires</h2>
    <ul>
      <li v-for="questionnaire in questionnaires" :key="questionnaire.id">
        {{ questionnaire.title }}
        <button @click="editQuestionnaire(questionnaire)">Modifier</button>
        <button @click="deleteQuestionnaire(questionnaire.id)">
          Supprimer
        </button>
      </li>
    </ul>
    <button @click="emit('createForm')">Créer un questionnaire</button>
  </div>
</template>