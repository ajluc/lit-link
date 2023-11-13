import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, useIonViewDidEnter, useIonRouter } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import './Tab1.css';
import ClubCard from '../components/clubCard';
import { GetClubs, GetClubsByUser } from '../services/ClubServices'

import { useAtom } from "jotai";
import clubAtom from "../store/clubStore";
import userAtom from '../store/userStore';

export interface CardData {
  id: number,
  clubName: string
}

const Tab1: React.FC = () => {
  const [club, setClub] = useAtom(clubAtom)
  const [cards, setCards] = useState<CardData[]>([])
  const [user] = useAtom(userAtom)
  const router = useIonRouter()

// Swap this to call the User, will give the clubs that user is in
  const fetchAllClubs = async () => {
    const data = await GetClubs()

    // const data = await GetClubsByUser(user.id)
    setCards(data)
    console.log('tab 1: ', user)
    console.log('tab 1: ', data)
  }

  useIonViewDidEnter(() => {
    if (!user.id) {
      console.log('this is why')
      // const goToPage = () => {
      //   router.push('/signin','none', 'replace')
      // }
      // goToPage()
    }
    if (user.id) console.log(user)
    fetchAllClubs()
    setClub({})
  },[user])


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clubs</IonTitle>
        </IonToolbar>
      </IonHeader>
      {user.id ? (
        <IonContent fullscreen class='ion-padding'>
          <h3>My Clubs</h3>
          <IonGrid>
            <IonRow>
              {cards?.map(c => (
                <IonCol size="6" size-md="4" size-lg="2"  key={c.id}>
                  <ClubCard card={c}/>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          <h3>Upcoming Meetings</h3>
          <IonFab vertical='bottom' horizontal='center' slot='fixed'>
            <IonFabButton routerLink='/my/club/new' routerDirection='forward'>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
      ) : (
        <></>
      )
      }
    </IonPage>
  );
};

export default Tab1;
