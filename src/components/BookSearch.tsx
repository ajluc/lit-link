import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { IonSearchbar, IonList, IonItem, IonAvatar, IonLabel, useIonViewWillEnter } from "@ionic/react";
import { GetBookById, CreateBook } from '../services/BookServices.js'
import { AddBookToList } from '../services/ClubServices.js'
import { GetClubById } from '../services/ClubServices'

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const BookSearch = () => {
    const [club, setClub] = useAtom(clubAtom)

    let [results, setResults] = useState([])

    const searchGoogleBooks = async (query) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            const books = response.data.items
            setResults(books)
        } catch (error) {
            console.error('Error fetching books:', error.id)
        }
    }

    const fetchClubDetails = async (id) => {
        const data = await GetClubById(id)
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
            await AddBookToList(data.id, club.id)
            await fetchClubDetails(club.id)
        } catch (error) {
            console.error('Error fetching books:', error.id)
        }
    }
    
    const handleInput = (ev: Event) => {
        let query = '';
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
        if (query === '') {setResults([])} else {searchGoogleBooks(query)}
    };

    return (
        <div>
            <IonSearchbar debounce={1000} onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
            <IonList>
                {results.map((result) => (
                <IonItem key={result.id} onClick={() => addBookToReadingList(result)}>
                    <IonAvatar aria-hidden="true" slot="start">
                        <img alt="" src={result.volumeInfo.imageLinks.thumbnail} />
                    </IonAvatar>
                    <IonLabel>{result.volumeInfo.title}</IonLabel>
                </IonItem>
                ))}
            </IonList>
        </div>
    )
}

export default BookSearch