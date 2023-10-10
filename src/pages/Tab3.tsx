import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonViewWillEnter, useIonRouter } from '@ionic/react';
import './Tab3.css';
import { useAtom } from 'jotai';
import userAtom from '../store/userStore';

const Tab3: React.FC = () => {
  const [user, setUser] = useAtom(userAtom)

  const router = useIonRouter()

  useIonViewWillEnter(() => {
    if (!user.id) {
      const goToPage = () => {
        router.push('/signin','none', 'replace')
      }
      goToPage()
    }
  }, [])

  const handleLogout = () => {
    setUser({})
    localStorage.clear()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      {user.id ? (
        <IonContent fullscreen class='ion-padding'>
          <h3>Profile</h3>
          <p>Hello {user.firstName} {user.lastName}</p>
          <IonButton onClick={handleLogout} routerLink='/signin' expand="block" className="ion-margin-top">Log Out</IonButton>
        </IonContent>
      ) : (
        <></>
      )
      }
    </IonPage>
  );
};

export default Tab3;
