import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import './Tab2.css';

import { useAtom } from "jotai";
import userAtom from '../store/userStore';

const Tab2: React.FC = () => {
  const [user] = useAtom(userAtom)
  const router = useIonRouter()

  useIonViewWillEnter(() => {
    if (!user.id) {
      const goToPage = () => {
        router.push('/signin','none', 'replace')
      }
      goToPage()
    }
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      {user.id ? (
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      ) : (
        <></>
      )
      }
    </IonPage>
  );
};

export default Tab2;
