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
        <button @click="editQuestionnaire(questionnaire.id)">Modifier</button>
        <button @click="deleteQuestionnaire(questionnaire.id)">
          Supprimer
        </button>
      </li>
    </ul>
    <button @click="goToCreateForm">Créer un questionnaire</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const requete = "http://127.0.0.1:5000/api/questionnaires";

const questionnaires = ref([]);
const router = useRouter();

const editQuestionnaire = (id) => {
  router.push(`/edit-questionnaire/${id}`);
};
const deleteQuestionnaire = async (id) => {
  try {
    const response = await fetch(`${requete}/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
      // Supprimer le questionnaire de la liste
      questionnaires.value = questionnaires.value.filter(questionnaire => questionnaire.id !== id);
    } else {
      console.error("Erreur lors de la suppression du questionnaire :", response.statusText);
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du questionnaire :", error);
  }
};
const goToCreateForm = () => {
  router.push("/create-questionnaire");
};

// Méthode pour charger les questionnaires avec leurs questions associées
const loadQuestionnaires = async () => {
  try {
    const response = await fetch(requete);
    if (!response.ok) {
      throw new Error("La requête pour charger les questionnaires a échoué");
    }

    const data = await response.json();
    questionnaires.value = data;
    questionnaires.value.forEach(async (questionnaire) => {
      const response = await fetch(`${requete}/${questionnaire.id}/questions`);
      if (!response.ok) {
        console.error("Erreur lors du chargement des questions du questionnaire", response.statusText);
        return;
      }
      const data = await response.json();
      questionnaire.questions = data;
    });
  } catch (error) {
    console.error("Erreur lors du chargement des questionnaires:", error);
  }
};


onMounted(loadQuestionnaires);
</script>
