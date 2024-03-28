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

        <div
          v-for="(response, responseIndex) in question.responses"
          :key="responseIndex"
        >
          <label :for="'response-' + responseIndex"
            >Réponse {{ responseIndex + 1 }}:</label
          >
          <input
            v-model="question.responses[responseIndex]"
            :id="'response-' + responseIndex"
            required
          />
        </div>

        <button type="button" @click="addResponse(question)">
          Ajouter une réponse
        </button>
      </div>

      <button type="button" @click="addQuestion">Ajouter une question</button>
      <button type="submit">Créer un questionnaire</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      questions: [
        {
          question: "",
          responses: ["", "", "", ""],
        },
      ],
    };
  },
  methods: {
    submitForm() {
      // Logique pour soumettre le formulaire
    },
    addQuestion() {
      this.questions.push({
        question: "",
        responses: ["", "", "", ""],
      });
    },
    addResponse(question) {
      question.responses.push("");
    },
  },
};
</script>

<style scoped>
/* Vos styles ici */
</style>
