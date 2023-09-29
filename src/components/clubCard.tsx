import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { TempCard } from '../data/cards';

interface TempCardItemProps {
  tempCard: TempCard;
}

const TempCardItem: React.FC<TempCardItemProps> = ({ tempCard }) => {
  return (
    // Add router link to IonCard later to open it up and view card
    <IonCard>
      <img alt={tempCard.alt} src={tempCard.src} />
      <IonCardHeader>
        <IonCardTitle>{tempCard.title}</IonCardTitle>
        <IonCardSubtitle>{tempCard.subtitle}</IonCardSubtitle>
      </IonCardHeader>

      {/* <IonCardContent>{tempCard.content}</IonCardContent> */}
    </IonCard>
  );
};

export default TempCardItem;