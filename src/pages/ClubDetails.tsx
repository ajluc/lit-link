import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonTitle, IonGrid, IonRow, IonCol, IonSpinner, IonImg, IonIcon, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonCardSubtitle, IonAvatar, IonButton, IonFab, IonFabButton, IonNavLink } from "@ionic/react"
import { useParams } from "react-router"
// One-off call to Google API for now: need to think about prop flow/architecture
import axios from 'axios';
import { useState, useEffect } from "react";
import tempBooks from "../data/books";
import BookList from "./BookList";
import NextMeetingWidget from "../components/NextMeetingWidget";
import BookListWidget from "../components/BookListWidget";
import MemberListWidget from "../components/MemberListWidget";

const ClubDetails = () => {
  const { id } = useParams<{ id?: string}>()
  // Mock-up club info: use this to inform back-end structure/what data I want in each
  const club = {
    id: id,
    clubName: 'Summer Reads',
    bookList: tempBooks,
    members: []
  }

  const [book, setBook] = useState<object>({})
  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?');
        const book = response.data;
        setBook(book)
      } catch (error) {
        console.error('Error fetching book:', error.id);
      }
    }
    fetchBook();
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
        {!book.id ? (<IonSpinner name="dots"></IonSpinner>): (
          <NextMeetingWidget book={book}/>
        )}
        <h3>Future Dates</h3>
        {/* Convert to component that accepts an array as prop - how to deal with diff data structures to access image src? */}
        <h3>Book List</h3>
        <BookListWidget books={tempBooks} clubId={club.id}/>
        <h3>Members</h3>
        <MemberListWidget members={tempBooks}/>
      </IonContent>
    </IonPage>
  )
}

export default ClubDetails