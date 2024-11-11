import axios from "axios";

const create = (newPerson) => {
    return axios.post('http://localhost:3001/persons', newPerson)
}

export { create }