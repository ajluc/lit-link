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
  IonCol,
  IonAvatar
} from '@ionic/react';
import BookSearch from "../components/BookSearch";
import BookDetailsModal from "../components/BookDetailsModal";

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const MemberListModal = () => {
  const [club] = useAtom(clubAtom)

  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonModal ref={modal} trigger={`open-member-modal-${club.id}`}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>Done</IonButton>
          </IonButtons>
          <IonTitle>Members</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              {club.members?.map(m =>(
                <IonCol size="3" key={m.id}>
                    <IonAvatar>
                        <p>{m.firstName[0]}{m.lastName[0]}</p>
                    </IonAvatar>
                  {/* <IonImg id={`open-modal-${b.id}`} alt="Cover" src={b.data.volumeInfo.imageLinks?.thumbnail}></IonImg>
                  <BookDetailsModal book={b.data}/> */}
                </IonCol>
              ) )}
            </IonRow>
          </IonGrid>
          <p>Invite Member</p>
      </IonContent>
    </IonModal>
  )
}

export default MemberListModal