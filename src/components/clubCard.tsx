import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';



const ClubCard: React.FC = ({card}) => {
  return (
    // Add router link to IonCard later to open it up and view card
    <IonCard routerLink={`/club/${card.id}`} routerDirection='forward'>
      <img alt='' src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>{card.clubName}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default ClubCard;