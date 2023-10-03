import { useState } from "react";
import axios from "axios";
import { IonSearchbar, IonList, IonItem, IonAvatar, IonLabel } from "@ionic/react";

const BookSearch = () => {
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
                <IonItem key={result.id} onClick={() => console.log(`Push book ${result.id} to book list array on back end`)}>
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