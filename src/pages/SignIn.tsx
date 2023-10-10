import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign In</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
