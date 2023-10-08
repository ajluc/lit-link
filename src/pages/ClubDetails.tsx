import { IonBackButton, IonButtons, IonButton, IonHeader, IonPage, IonToolbar, IonContent, IonTitle, IonSpinner, useIonViewWillEnter } from "@ionic/react"
import { useParams } from "react-router"
import axios from 'axios';
import { useState, useEffect } from "react";
import tempBooks from "../data/books";
import NextMeetingWidget from "../components/NextMeetingWidget";
import BookListWidget from "../components/BookListWidget";
import MemberListWidget from "../components/MemberListWidget";
import { GetClubById } from '../services/ClubServices'

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";
import BookListModal from "../components/BookListModal";

const ClubDetails = () => {
  const { id } = useParams<{ id?: string}>()

  const [club, setClub] = useState({})
  const [book, setBook] = useState(null)
  
  useIonViewWillEnter(() => {
    const fetchClubDetails = async () => {
      const data = await GetClubById(id)
      setClub(data)
      setBook(data.books[0])
    }
    fetchClubDetails()
  }, [])

return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>{club.clubName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <h3>{id}</h3>
        <h3>Next Meeting</h3>
        {/* {club ? (
          <NextMeetingWidget />
          ): (
          <IonSpinner name="dots"></IonSpinner>
        )} */}
        <h3>Future Dates</h3>
        <h3>Book List</h3>
        {club ? (
          // <BookListWidget club={club}/>
          <div>
            <IonButton id={`open-modal-${club.id}`} expand="block" >Click me</IonButton>
            <BookListModal club={club}/>
          </div>
        ) : <IonSpinner name="dots"></IonSpinner>}
        <h3>Members</h3>
        <MemberListWidget members={tempBooks}/>
      </IonContent>
    </IonPage>
  )
}

export default ClubDetails