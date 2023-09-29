import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent } from "@ionic/react"

const NewClub = () => {
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
        <p>New Club</p>
      </IonContent>
    </IonPage>
  )
}

export default NewClub