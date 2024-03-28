export const getQuestion = async (id) => {
    const options = {
        method: 'GET',
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questions/${id}`, options);
    const data = await response.json();
    return data;
}

export const updateQuestion = async (id, title) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ title }),
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questions/${id}`, options);
    const data = await response.json();
    return data;
}

export const deleteQuestion = async (id) => {
    const options = {
        method: 'DELETE',
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questions/${id}`, options);
    const data = await response.json();
    return data;
}

export const getAllQuestions = async (id) => {
    const options = {
        method: 'GET',
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questionnaires/${id}/questions`, options);
    const data = await response.json();
    return data;
}

export const createQuestion = async (questionnairesId, title, questionType) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, questionType }),
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questionnaires/${questionnairesId}/questions`, options);
    const data = await response.json();
    return data;
}