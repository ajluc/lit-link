import Client from './api'

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

export const AddBookToList = async (bookId, clubId) => {
  try {
    const res = await Client.post(`/clubs/${clubId}/addBooks`, {
      bookId: bookId
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const RemoveBookFromList = async (bookId, clubId) => {
  try {
    const res = await Client.delete(`/clubs/${clubId}/${bookId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateClub = async (data) => {
  try {
    const res = await Client.post('/clubs', data)
  } catch (error) {
    throw error
  }
}
