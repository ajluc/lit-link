import { IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react"
import BookDetailsModal from "./BookDetailsModal"

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const NextMeetingWidget = () => {
  const [club, setClub] = useAtom(clubAtom)
  const currentBook = club.books?.find(Boolean)
  

  return (
      <IonGrid fixed={true}>
        {currentBook ? (
          <IonRow>
            <IonCol size="6.5">
              <IonCard>
                <IonImg id={`open-modal-${currentBook.id}`} alt="Cover" src={currentBook?.data.volumeInfo.imageLinks.thumbnail}></IonImg>
                <BookDetailsModal book={currentBook.data}/>
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
        ): (<></>)}
      </IonGrid>    
  )
}

export default NextMeetingWidget