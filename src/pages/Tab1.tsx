import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, useIonViewWillEnter } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import './Tab1.css';
import TempCardItem from '../components/clubCard';
import { TempCard, getCards } from '../data/cards';

const Tab1: React.FC = () => {

  const [cards, setCards] = useState<TempCard[]>([])

  useIonViewWillEnter(() => {
    const cards = getCards()
    setCards(cards)
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clubs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <h3>My Clubs</h3>
        <IonGrid>
          <IonRow>
            {cards.map(c => (
              <IonCol size="6" size-md="4" size-lg="2"  key={c.id}>
                <TempCardItem tempCard={c}/>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <h3>Upcoming Meetings</h3>
        <IonFab vertical='bottom' horizontal='center' slot='fixed'>
          <IonFabButton routerLink='/club/new' routerDirection='forward'>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
