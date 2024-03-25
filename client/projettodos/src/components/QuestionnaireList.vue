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
    <button @click="showCreateForm">Nouveau questionnaire</button>
  </div>
</template>

<script>
export default {
  props: ["questionnaires"],
  methods: {
    editQuestionnaire(questionnaire) {
      // Logique pour modifier un questionnaire
    },
    deleteQuestionnaire(questionnaireId) {
      // Logique pour supprimer un questionnaire
    },
    showCreateForm() {
      // Afficher le formulaire de création de questionnaire
    },
  },
};
</script>
