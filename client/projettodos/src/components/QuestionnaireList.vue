<template>
  <div>
    <h2>Liste des questionnaires</h2>
    <ul>
      <li v-for="questionnaire in questionnaires" :key="questionnaire.id">
        <h3>{{ questionnaire.name }}</h3>
        <ul>
          <li v-for="question in questionnaire.questions" :key="question.id">
            {{ question.title }}
          </li>
        </ul>
        <button @click="editQuestionnaire(questionnaire)">Modifier</button>
        <button @click="deleteQuestionnaire(questionnaire.id)">
          Supprimer
        </button>
      </li>
    </ul>
    <button @click="goToCreateForm()">Créer un questionnaire</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const requete = "http://127.0.0.1:5000/api/questionnaires";

const questionnaires = ref([]);
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

// Méthode pour charger les questionnaires avec leurs questions associées
const loadQuestionnaires = async () => {
  try {
    const response = await fetch(requete);
    const data = await response.json();
    questionnaires.value = data.map((questionnaire) => ({
      ...questionnaire,
      questions: [], // Initialisation des questions à un tableau vide
    }));
    // Chargement des questions associées à chaque questionnaire
    await Promise.all(
      questionnaires.value.map(async (questionnaire) => {
        const questionResponse = await fetch(
          `http://127.0.0.1:5000/api/questionnaire/${questionnaire.id}/questions`
        );
        const questionData = await questionResponse.json();
        questionnaire.questions = questionData;
      })
    );
  } catch (error) {
    console.error("Erreur lors du chargement des questionnaires :", error);
  }
};

onMounted(loadQuestionnaires);
</script>
