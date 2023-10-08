import { IonGrid, IonRow, IonCol, IonAvatar, IonImg, IonIcon } from "@ionic/react"
import { ellipsisHorizontal } from 'ionicons/icons';

const MemberListWidget = ({members}) => {
    return (
        <IonGrid>
            <IonRow>
                {members.slice(0,3).map(m =>(
                    <IonCol size="3" key={m.id}>
                    <IonAvatar>
                        <IonImg alt="Cover" src={m.volumeInfo.imageLinks.thumbnail}></IonImg>
                    </IonAvatar>
                    </IonCol>
                ) )}
                <IonCol size="3">
                    <IonAvatar>
                    <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
                    </IonAvatar>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default MemberListWidget