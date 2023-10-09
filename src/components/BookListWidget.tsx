import { IonGrid, IonRow, IonCol, IonImg, IonButton, IonIcon } from "@ionic/react"
import { ellipsisHorizontal } from 'ionicons/icons';

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const BookListWidget = () => {
  const [club] = useAtom(clubAtom)

  return (
      <IonGrid>
        <IonRow>
          {/* Later with web formatting, slice size should be responsive to screen size */}
          {club.books?.slice(0,3).map(b =>(
            <IonCol size="3" key={b.id}>
              <IonImg alt="Cover" src={b.data.volumeInfo.imageLinks.thumbnail}></IonImg>
            </IonCol>
          ) )}
            <IonCol size="3">
            <IonButton id={`open-modal-${club.id}`} expand="block" >
                <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
            </IonButton>
            </IonCol>
        </IonRow>
      </IonGrid>
  )
}

export default BookListWidget