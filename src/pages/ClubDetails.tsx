import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonTitle, IonSpinner, useIonViewWillEnter } from "@ionic/react"
import { useParams } from "react-router"
// One-off call to Google API for now: need to think about prop flow/architecture
import axios from 'axios';
import { useState, useEffect } from "react";
import tempBooks from "../data/books";
import NextMeetingWidget from "../components/NextMeetingWidget";
import BookListWidget from "../components/BookListWidget";
import MemberListWidget from "../components/MemberListWidget";
import { GetClubById } from '../services/ClubServices'

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const ClubDetails = () => {
  const { id } = useParams<{ id?: string}>()

  const [club, setClub] = useAtom(clubAtom)
  const [book, setBook] = useState(null)
  
  // Mock-up club info: use this to inform back-end structure/what data I want in each
  // const club = {
  //   id: id,
  //   clubName: 'Summer Reads',
  //   bookList: tempBooks,
  //   members: []
  // }

  
  useIonViewWillEnter(() => {
    // async function fetchBook() {
      //   try {
        //     const response = await axios.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?');
        //     const book = response.data;
        //     setBook(book)
        //     console.log(book)
        //   } catch (error) {
          //     console.error('Error fetching book:', error.id);
          //   }
          // }
    // fetchBook();
    const fetchClubDetails = async () => {
      const data = await GetClubById(id)
      setClub(data)
      setBook(data.books[0])
      console.log(club)
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
        <h3>Next Meeting</h3>
        {/* {club ? (
          <NextMeetingWidget />
          ): (
          <IonSpinner name="dots"></IonSpinner>
        )} */}
        <h3>Future Dates</h3>
        <h3>Book List</h3>
        {club ? (
          <BookListWidget />
        ) : <IonSpinner name="dots"></IonSpinner>}
        <h3>Members</h3>
        <MemberListWidget members={tempBooks}/>
      </IonContent>
    </IonPage>
  )
}

export default ClubDetails