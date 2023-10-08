import Client from "./api";

export const GetClubs = async () => {
    try {
        const res = await Client.get('/clubs')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetClubById = async (clubId) => {
    try {
        const res = await Client.get(`/clubs/${clubId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const AddBookToList = async (book, clubId) => {
    try {
        const res = await Client.post(`/clubs/${clubId}/${book.id}`)
        return res.data
    } catch (error) {
        throw error
    }
}