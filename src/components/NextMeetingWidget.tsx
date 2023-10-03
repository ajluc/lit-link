import { IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react"
import BookDetailsModal from "./BookDetailsModal"

const NextMeetingWidget = ({book}) => {
    return (
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="6.5">
              <IonCard>
                <IonImg id={`open-modal-${book.id}`} alt="Cover" src={book.volumeInfo.imageLinks.medium}></IonImg>
                <BookDetailsModal book={book} />
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
    )
}

export default NextMeetingWidget