import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonTitle } from "@ionic/react"
import { useParams } from "react-router"
// One-off call to Google API for now: need to think about prop flow/architecture
import axios from 'axios';
import { useState, useEffect } from "react";

// Mock-up club info: use this to inform back-end structure/what data I want in each
const club = {
  id: 1,
  clubName: 'Summer Reads',

}



const ClubDetails = () => {

  const [book, setBook] = useState<object>({})
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?');
        const users = response.data;
        setBook(users)
      } catch (error) {
        console.error('Error fetching users:', error.id);
      }
    }
    fetchUsers();
  }, [])

  const { id } = useParams<{ id?: string}>()

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
        <p>{book?.id}</p>
      </IonContent>
    </IonPage>
  )
}

export default ClubDetails