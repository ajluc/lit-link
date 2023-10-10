import Client from "./api";

export const GetBookById = async (bookId) => {
    try {
        const res = await Client.get(`/books/${bookId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateBook = async (data) => {
    try {
        const res = await Client.post('/books', data)
        return res.data
    } catch (error) {
        throw error
    }
}