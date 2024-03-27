export const getAllQuestionnaires = async () => {
    const options = {
        method: 'GET',
    };
    const response = await fetch('http://127.0.0.1:5000/api/questionnaires', options);
    const data = await response.json();
    return data;
}

export const getQuestionnaire = async (id) => {
    const options = {
        method: 'GET',
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questionnaires/${id}`, options);
    const data = await response.json();
    return data;
}

export const createQuestionnaire = async (name) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    };
    const response = await fetch('http://127.0.0.1:5000/api/questionnaires', options);
    const data = await response.json();
    return data;
}

export const updateQuestionnaire = async (id, name) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questionnaires/${id}`, options);
    const data = await response.json();
    return data;
}

export const deleteQuestionnaire = async (id) => {
    const options = {
        method: 'DELETE',
    };
    const response = await fetch(`http://127.0.0.1:5000/api/questionnaires/${id}`, options);
    const data = await response.json();
    return data;
}