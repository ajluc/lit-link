import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonSpinner, IonGrid, IonRow, IonCol, IonImg, IonSearchbar, IonList, IonItem, useIonViewWillEnter } from "@ionic/react"
import { useParams } from "react-router"
import BookDetailsModal from "../components/BookDetailsModal";
import BookSearch from "../components/BookSearch";

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const BookList = () => {
  // Check that id from params matches id in atom, otherwise need to rerun api call
  // const { id } = useParams<{ id?: string }>()
  // console.log('club id: ', id)
  const [club, setClub] = useAtom(clubAtom)

  useIonViewWillEnter(() => {
    // console.log("let me tell you something: ", club)
  },[])

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
        <div>
          <p>Reading List</p>
          <IonGrid>
            <IonRow>
              {club.books?.map(b =>(
                <IonCol size="3" key={b.id}>
                  <IonImg id={`open-modal-${b.id}`} alt="Cover" src={b.data.volumeInfo.imageLinks?.thumbnail} onClick={() => console.log(`open-modal-${b.id}`)}></IonImg>
                  <BookDetailsModal book={b.data}/>
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