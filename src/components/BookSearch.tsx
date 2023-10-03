import { useState } from "react";
import axios from "axios";
import tempBooks from "../data/books";
import { IonSearchbar, IonList, IonItem } from "@ionic/react";

const BookSearch = () => {
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
    
    const handleInput = (ev: Event) => {
        let query = '';
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
    
        // setResults(tempBooks.filter((d) => d.volumeInfo.title.toLowerCase().indexOf(query) > -1));
        if (query === '') {setResults([])} else {searchGoogleBooks(query)}
    };

    return (
        <div>
            <IonSearchbar debounce={1000} onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
            <IonList>
                {results.map((result) => (
                <IonItem key={result.id}>{result.volumeInfo.title}</IonItem>
                ))}
            </IonList>
        </div>
    )
}

export default BookSearch