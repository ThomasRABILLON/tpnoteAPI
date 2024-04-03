<template>
  <div>
    <h2>Création d'un questionnaire</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Titre:</label>
      <input v-model="title" id="title" placeholder="Titre" required />

      <div v-for="(question, questionIndex) in questions" :key="questionIndex">
        <h3>Question {{ questionIndex + 1 }}</h3>
        <label :for="'question-' + questionIndex">Question:</label>
        <input
          v-model="question.question"
          :id="'question-' + questionIndex"
          required
        />
        <button type="button" @click="deleteQuestion(questionIndex)">
          Supprimer la question
        </button>
      </div>

      <button type="button" @click="addQuestion">Ajouter une question</button>
      <button type="submit">Créer un questionnaire</button>
    </form>
    <button @click="goToHome()">Revenir en arrière</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      questions: [{ question: "" }],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/questionnaires", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: this.title }),
        });

        const data = await response.json();
        const questionnaireId = data.id;

        // Création des questions associées au questionnaire
        this.questions.forEach(async (question) => {
          const option = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: question.question, questionType: "text" }),
          };
          const questionResponse = await fetch(`http://127.0.0.1:5000/api/questionnaires/${questionnaireId}/questions`, option);

          if (!questionResponse.ok) {
            console.error("Erreur lors de la création de la question :", questionResponse.statusText);
          }
        })


        if (response.ok) {
          this.$router.push("/");
        } else {
          console.error("Erreur lors de la création du questionnaire :", response.statusText);
        }
      } catch (error) {
        console.error("Erreur lors de la création du questionnaire :", error);
      }
    },
    addQuestion() {
      this.questions.push({ question: "" });
    },
    deleteQuestion(questionIndex) {
      this.questions.splice(questionIndex, 1);
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
