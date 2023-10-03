import { IonGrid, IonRow, IonCol, IonImg, IonButton, IonIcon } from "@ionic/react"
import { ellipsisHorizontal } from 'ionicons/icons';

const BookListWidget = ({books, clubId}) => {
    return (
        <IonGrid>
          <IonRow>
            {/* Later with web formatting, slice size should be responsive to screen size */}
            {books.slice(0,3).map(b =>(
              <IonCol size="3" key={b.id}>
                {/* <IonAvatar> */}
                  <IonImg alt="Cover" src={b.volumeInfo.imageLinks.medium}></IonImg>
                {/* </IonAvatar> */}
              </IonCol>
            ) )}
              <IonCol size="3">
                <IonButton expand="block" routerLink={`/club/${clubId}/booklist`}>
                  <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
                </IonButton>
              </IonCol>
          </IonRow>
        </IonGrid>
    )
}

export default BookListWidget