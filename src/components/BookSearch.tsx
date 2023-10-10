import { useState } from "react";
import axios from "axios";
import { IonSearchbar, IonList, IonItem, IonAvatar, IonLabel, useIonViewWillEnter } from "@ionic/react";
import { GetBookById, CreateBook } from '../services/BookServices'
import { AddBookToList, GetClubById } from '../services/ClubServices'

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const BookSearch = ({clubId}) => {
    const [club, setClub] = useAtom(clubAtom)
    let [results, setResults] = useState([])

    const searchGoogleBooks = async (query) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            const books = response.data.items
            console.log("books: ", books)
            setResults(books)
        } catch (error) {
            console.error('Error fetching books:', error.id)
        }
    }
    
    const handleInput = (ev: Event) => {
        let query = '';
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
        if (query === '') {setResults([])} else {searchGoogleBooks(query)}
        console.log("query: ", query)
    };

    const fetchClubDetails = async () => {
        const data = await GetClubById(clubId)
        setClub(data)
    }

    const addBookToReadingList = async (data) => {
        try {
            const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${data.id}`)
            // check if book exists in database
            const bookExists = await GetBookById(data.id)
            if (!bookExists) {
                // Add book
                const newBook = await CreateBook({
                    "id": data.id,
                    "data": book.data})
            }
            await AddBookToList(data.id, clubId)
            await fetchClubDetails()
        } catch (error) {
            console.error('Error fetching books:', error.id)
        }
    }
    

    return (
        <div>
            <IonSearchbar debounce={1000} onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
            <IonList>
                {results?.map((result) => (
                <IonItem key={result.id} onClick={() => addBookToReadingList(result)}>
                    <IonAvatar aria-hidden="true" slot="start">
                        <img alt="" src={result.volumeInfo.imageLinks?.thumbnail} />
                    </IonAvatar>
                    <IonLabel>{result.volumeInfo?.title}</IonLabel>
                </IonItem>
                ))}
            </IonList>
        </div>
    )
}

export default BookSearch