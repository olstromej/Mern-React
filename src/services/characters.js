import axios from 'axios'

export const deleteCharacter = async (id) => {
    try {
        const response = await axios.delete(`https://project-2-api-production.up.railway.app/characters/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateCharacter = async (id, characterData) => {
    try {
        const response = axios.put(`https://project-2-api-production.up.railway.app/characters/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}