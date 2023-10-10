import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';



const ClubCard: React.FC = ({card}) => {
  return (
    // Add router link to IonCard later to open it up and view card
    <IonCard routerLink={`/my/club/id/${card.id}`} routerDirection='forward'>
      {card.books.find(Boolean) ? (
        <img alt='' src={card.books.find(Boolean).data.volumeInfo.imageLinks.medium} />
      ) : (
        <img alt='' src="https://ionicframework.com/docs/img/demos/card-media.png" />
      )}
      <IonCardHeader>
        <IonCardTitle>{card.clubName}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default ClubCard;