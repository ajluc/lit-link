import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent } from "@ionic/react"
import { useEffect } from "react"
import { useParams } from "react-router"

const BookList = () => {
  const { id } = useParams<{ id?: string }>()
  useEffect(() => {
    console.log('We are in')
    console.log(id)
  },[])
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
        <p>Book List</p>
        <p>{id}</p>
      </IonContent>
    </IonPage>
  )
}

export default BookList