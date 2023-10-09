import { useRef } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import BookSearch from "../components/BookSearch";
import BookDetailsModal from "../components/BookDetailsModal";

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const BookListModal = () => {
  const [club] = useAtom(clubAtom)

  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonModal ref={modal} trigger={`open-modal-${club.id}`}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>Done</IonButton>
          </IonButtons>
          <IonTitle>Reading List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              {club.books?.map(b =>(
                <IonCol size="3" key={b.id}>
                  <IonImg id={`open-modal-${b.id}`} alt="Cover" src={b.data.volumeInfo.imageLinks?.thumbnail}></IonImg>
                  <BookDetailsModal book={b.data}/>
                </IonCol>
              ) )}
            </IonRow>
          </IonGrid>
          <p>Add Book</p>
          <BookSearch clubId={club.id} />
      </IonContent>
    </IonModal>
  )
}

export default BookListModal