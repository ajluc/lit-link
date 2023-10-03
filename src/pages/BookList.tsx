import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonSpinner, IonGrid, IonRow, IonCol, IonImg, IonSearchbar, IonList, IonItem } from "@ionic/react"
import { useEffect } from "react"
import { useParams } from "react-router"
import tempBooks from "../data/books";
import BookDetailsModal from "../components/BookDetailsModal";
import BookSearch from "../components/BookSearch";

const BookList = () => {
  const { id } = useParams<{ id?: string }>()
  // useEffect(() => {
  //   console.log('We are in')
  //   console.log(id)
  // },[])

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
          <p>Reading List</p>
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
          <BookSearch />
        </div>
       {/* )} */}
      </IonContent>
    </IonPage>
  )
}

export default BookList