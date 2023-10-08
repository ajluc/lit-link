import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { IonSearchbar, IonList, IonItem, IonAvatar, IonLabel, useIonViewWillEnter } from "@ionic/react";
import { GetBookById, CreateBook } from '../services/BookServices.js'

const BookSearch = () => {
    const { id } = useParams<{ id?: string}>()
    let [results, setResults] = useState([])

    const searchGoogleBooks = async (query) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            const books = response.data.items
            setResults(books)
            console.log(books)
        } catch (error) {
            console.error('Error fetching books:', error.id)
        }
    }

    useIonViewWillEnter (() => {
        console.log(id)
    },[id])

    const addBookToReadingList = async (data) => {
        try {
            console.log(id)
            // check if book exists in database
            // const response = await GetBookById(data.id)
            // if (response) {
            //     console.log('yes')
            //     // Add to reading list
            // } else {
            //     console.log('no')
            //     // Add book
            //     const book = await CreateBook({
            //         "id": data.id,
            //         "data": data})
            //     console.log(book)
            //     // Then, add to reading list
            // }
            // console.log(response)
            console.log(`Push book ${data.id} to book list array on back end: `, data)
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