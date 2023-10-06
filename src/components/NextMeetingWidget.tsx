import { IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, useIonViewWillEnter } from "@ionic/react"
import BookDetailsModal from "./BookDetailsModal"

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const NextMeetingWidget = () => {
  // const book = club.books[0]
  const [club, setClub] = useAtom(clubAtom)
  const currentBook = club.books?.shift()
  
  useIonViewWillEnter(() => {
    console.log('hi from widget', club.id)

  }, [club])

  return (
      <IonGrid fixed={true}>
        <IonRow>
          {currentBook ? (

          <IonCol size="6.5">
            {/* <IonCard> */}
              <IonImg id={`open-modal-${currentBook?.id}`} alt="Cover" src={currentBook?.data.volumeInfo.imageLinks.medium}></IonImg>
              <BookDetailsModal book={currentBook}/>
            {/* </IonCard> */}
          </IonCol>
          ): (<></>)}
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
  )
}

export default NextMeetingWidget