import { IonGrid, IonRow, IonCol, IonAvatar, IonImg, IonIcon, IonButton } from "@ionic/react"
import { ellipsisHorizontal } from 'ionicons/icons';

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";

const MemberListWidget = () => {
    const [club] = useAtom(clubAtom)
    return (
        <IonGrid>
            <IonRow>
                {club.members?.slice(0,3).map(m =>(
                    <IonCol size="3" key={m.id}>
                    <IonAvatar>
                        {/* <IonImg alt="Cover" src={m.volumeInfo.imageLinks.thumbnail}></IonImg> */}
                        <p>{m.firstName[0]}{m.lastName[0]}</p>
                    </IonAvatar>
                    </IonCol>
                ) )}
                <IonCol size="3">
                    <IonButton id={`open-member-modal-${club?.id}`} expand="block" >
                        <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default MemberListWidget