<template>
  <div>
    <h2>Modifier le questionnaire "{{ title }}"</h2>
    <label>Nom du questionnaire:</label>
    <input v-model="title" placeholder="Nom du questionnaire" required />

    <div v-for="(question, index) in questions" :key="index">
      <h3>Question {{ index + 1 }}</h3>
      <label>Titre de la question:</label>
      <input v-model="question.question" placeholder="Titre de la question" required />
    </div>

    <button @click="submitForm">Enregistrer les modifications</button>
    <button @click="goBack">Annuler</button>
  </div>
</template>

<script>
// Vous pouvez laisser cette partie vide si nécessaire
export default {
  data() {
    return {
      questionnaireId: null,
      title: "",
      questions: [],
    };
  },
  async mounted() {
    this.questionnaireId = this.$route.params.id;
    await this.loadData();
  },
  methods: {
    async loadData() {
      // Récupérer les informations du questionnaire
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/questionnaires/${this.questionnaireId}`);
        if (!response.ok) {
          throw new Error("La requête pour récupérer le questionnaire a échoué");
        }

        const data = await response.json();
        this.title = data.name;

        // Récupérer les questions associées au questionnaire
        const responseQuestions = await fetch(`http://127.0.0.1:5000/api/questionnaires/${this.questionnaireId}/questions`);
        if (!responseQuestions.ok) {
          throw new Error("La requête pour récupérer les questions du questionnaire a échoué");
        }

        const dataQuestions = await responseQuestions.json();
        this.questions = dataQuestions.map(question => ({ id: question.id, question: question.title }));
      } catch (error) {
        console.error("Erreur lors de la récupération du questionnaire :", error);
      }
    },
    goBack() {
      this.$router.push("/");
    },
    async submitForm() {
      let response;
      try {
        response = await fetch(`http://127.0.0.1:5000/api/questionnaires/${this.questionnaireId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: this.title }),
        });
      } catch (error) {
        console.error("Erreur lors de la modification du questionnaire :", error);
      }

      try {
        await this.questions.forEach(async (question) => {
          console.log(question.id, question.question);
          const option = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: String(question.question) }),
          };
          response = await fetch(`http://127.0.0.1:5000/api/questions/${question.id}`, option);
        });
      } catch (error) {
        console.error("Erreur lors de la modification des questions :", error);
      }

      if (response.ok) {
        this.$router.push("/");
      } else {
        console.error("Erreur lors de la modification du questionnaire :", response.statusText);
      }
    }
  }
};
</script>
