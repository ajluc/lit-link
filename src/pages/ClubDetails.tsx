import { IonBackButton, IonButtons, IonButton, IonHeader, IonPage, IonToolbar, IonContent, IonTitle, IonSpinner, useIonViewWillEnter, useIonRouter } from "@ionic/react"
import { useParams } from "react-router"
import NextMeetingWidget from "../components/NextMeetingWidget";
import BookListWidget from "../components/BookListWidget";
import MemberListWidget from "../components/MemberListWidget";
import { GetClubById } from '../services/ClubServices'

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";
import userAtom from "../store/userStore";

import BookListModal from "../components/BookListModal";
import MemberListModal from "../components/MemberListModal";

const ClubDetails = () => {
  const { id } = useParams<{ id?: string}>()

  const [club, setClub] = useAtom(clubAtom)
  const [user] = useAtom(userAtom)
  const router = useIonRouter()
  
  useIonViewWillEnter(() => {
    // if (!user.id) {
    //   const goToPage = () => {
    //     router.push('/signin','none', 'replace')
    //   }
    //   goToPage()
    // }
    const fetchClubDetails = async () => {
      const data = await GetClubById(id)
      setClub(data)
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
      {user.id ? (
        <IonContent fullscreen class='ion-padding'>
          <h3>Next Meeting</h3>
          {club ? (
            <NextMeetingWidget />
            ): (
            <IonSpinner name="dots"></IonSpinner>
          )}
          <h3>Future Dates</h3>
          <h3>Book List</h3>
          {club ? (
            <div>
              <BookListWidget/>
              <BookListModal/>
            </div>
          ) : <IonSpinner name="dots"></IonSpinner>}
          <h3>Members</h3>
          <MemberListWidget/>
          <MemberListModal/>
        </IonContent>
      ) : (
        <></>
      )
      }
    </IonPage>
  )
}

export default ClubDetails