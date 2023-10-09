import { useRef } from "react";
import { useParams } from "react-router";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonImg
} from '@ionic/react';
import { RemoveBookFromList, GetClubById } from "../services/ClubServices.js"

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const BookDetailsModal = ({book}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const { id } = useParams<{ id?: string}>()

  const [club, setClub] = useAtom(clubAtom)

  const fetchClubDetails = async () => {
    const data = await GetClubById(id)
    setClub(data)
  }

  const RemoveBook = async () => {
    await RemoveBookFromList(book.id, id)
    await fetchClubDetails()
  }

  const handleClick = () => {
    RemoveBook()
    modal.current?.dismiss()
  }
  return (
        <IonModal ref={modal} trigger={`open-modal-${book.id}`} >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Done</IonButton>
              </IonButtons>
              <IonTitle>Book Details</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonImg alt="Cover" src={book.volumeInfo.imageLinks?.medium}></IonImg>
            {!book.volumeInfo.authors[1] ? (<p>{book.volumeInfo.authors[0]}</p>) : (<p>{book.volumeInfo.authors[0]} et al</p>)}
            <h3>{book.volumeInfo.title}</h3>
            <h3>{book.volumeInfo?.subtitle}</h3>
            <p>Published {book.volumeInfo.publishedDate?.split("-")[0]}</p>
            <div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description}} />
            <IonButton className="ion-margin-top" onClick={handleClick} expand="block" >Remove Book From List</IonButton>
          </IonContent>
        </IonModal>
  );
}

export default BookDetailsModal