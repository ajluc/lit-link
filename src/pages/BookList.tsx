import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonSpinner, IonGrid, IonRow, IonCol, IonImg, IonSearchbar, IonList, IonItem } from "@ionic/react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import tempBooks from "../data/books";
import BookDetailsModal from "../components/BookDetailsModal";

const BookList = () => {
  const { id } = useParams<{ id?: string }>()
  useEffect(() => {
    console.log('We are in')
    console.log(id)
  },[])

  let [results, setResults] = useState([...tempBooks])

  const handleInput = (ev: Event) => {
    let query = '';
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(tempBooks.filter((d) => d.volumeInfo.title.toLowerCase().indexOf(query) > -1));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
      {/* {!id ? (<IonSpinner name="dots"></IonSpinner>): ( */}
        <div>
          <p>Book List</p>
          <p>{id}</p>
          <IonGrid>
            <IonRow>
              {tempBooks.map(b =>(
                <IonCol size="3" key={b.id}>
                  {/* <IonAvatar> */}
                    <IonImg id={`open-modal-${b.id}`} alt="Cover" src={b.volumeInfo.imageLinks.medium}></IonImg>
                    <BookDetailsModal book={b}/>
                  {/* </IonAvatar> */}
                </IonCol>
              ) )}
            </IonRow>
          </IonGrid>
          <p>Add Book</p>
          <IonSearchbar debounce={1000} onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
          <IonList>
            {results.map((result) => (
              <IonItem key={result.id}>{result.volumeInfo.title}</IonItem>
            ))}
          </IonList>
        </div>
       {/* )} */}
      </IonContent>
    </IonPage>
  )
}

export default BookList