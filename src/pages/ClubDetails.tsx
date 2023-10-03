import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonTitle, IonGrid, IonRow, IonCol, IonSpinner, IonImg, IonIcon, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonCardSubtitle, IonAvatar, IonButton, IonFab, IonFabButton, IonNavLink } from "@ionic/react"
import { useParams } from "react-router"
// One-off call to Google API for now: need to think about prop flow/architecture
import axios from 'axios';
import { useState, useEffect } from "react";
import tempBooks from "../data/books";
import { ellipsisHorizontal } from 'ionicons/icons';
import BookList from "./BookList";

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
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="6.5">
              <IonCard>
                <IonImg alt="Cover" src={book.volumeInfo.imageLinks.medium}></IonImg>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Oct 1</IonCardTitle>
                  <IonCardSubtitle>9pm</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Amaya's House, 50% progress</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        )}
        <h3>Future Dates</h3>
        {/* Convert to component that accepts an array as prop - how to deal with diff data structures to access image src? */}
        <h3>Book List</h3>
        <IonGrid>
          <IonRow>
            {/* Later with web formatting, slice size should be responsive to screen size */}
            {tempBooks.slice(0,3).map(b =>(
              <IonCol size="3" key={b.id}>
                {/* <IonAvatar> */}
                  <IonImg alt="Cover" src={b.volumeInfo.imageLinks.medium}></IonImg>
                {/* </IonAvatar> */}
              </IonCol>
            ) )}
              <IonCol size="3">
                <IonButton expand="block" routerLink={`/club/${club.id}/booklist`}>
                  <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
                </IonButton>
              </IonCol>
          </IonRow>
        </IonGrid>
        <h3>Members</h3>
        <IonGrid>
          <IonRow>
            {tempBooks.slice(0,3).map(b =>(
              <IonCol size="3" key={b.id}>
                <IonAvatar>
                  <IonImg alt="Cover" src={b.volumeInfo.imageLinks.medium}></IonImg>
                </IonAvatar>
              </IonCol>
            ) )}
              <IonCol size="3">
                <IonAvatar>
                <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
                </IonAvatar>
              </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default ClubDetails