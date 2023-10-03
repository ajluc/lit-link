import { useRef } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle
} from '@ionic/react';

const BookDetailsModal = ({book}) => {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
        <IonModal ref={modal} trigger={`open-modal-${book.id}`} >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Done</IonButton>
              </IonButtons>
              <IonTitle>{book.volumeInfo.title}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>{book.volumeInfo.title}</p>
          </IonContent>
        </IonModal>
  );
}

export default BookDetailsModal