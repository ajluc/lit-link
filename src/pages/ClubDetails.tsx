import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent } from "@ionic/react"
import { useParams } from "react-router"

const ClubDetails = () => {
  const { id } = useParams<{ id?: string}>()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <p>Club Details {id} </p>
      </IonContent>
    </IonPage>
  )
}

export default ClubDetails