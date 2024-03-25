const getQuestionnaires = async () => {
  const response = await fetch('/api/questionnaires');
  const questionnaires = await response.json();

  questionnaires.forEach((questionnaire) => {
    let li = document.createElement('li');
    li.innerHTML = questionnaire.name;
    li.onclick = () => getQuestionnaire(questionnaire.id);
    document.getElementById('questionnaires').appendChild(li);
  });
}


const getQuestionnaire = async (id) => {
  const response = await fetch(`/api/questionnaires/${id}`);
  const questionnaire = await response.json();

  document.getElementById('questionnaire').innerHTML = questionnaire.name;
}


document.onload = getQuestionnaires();

