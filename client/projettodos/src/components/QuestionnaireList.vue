// QuestionnaireList.vue
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
    <button @click="goToCreateForm()">Créer un questionnaire</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: ["questionnaires"],
  setup() {
    const router = useRouter();

    const editQuestionnaire = () => {
      /* Logique pour modifier le questionnaire */
    };
    const deleteQuestionnaire = () => {
      /* Logique pour supprimer le questionnaire */
    };
    const goToCreateForm = () => {
      router.push("/create-questionnaire");
    };

    return { editQuestionnaire, deleteQuestionnaire, goToCreateForm };
  },
};
</script>
