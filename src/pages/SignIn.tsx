import { IonContent, IonPage, useIonRouter, IonButton, IonList, IonItem, IonInput, IonToast, useIonViewWillEnter } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { SignInUser } from '../services/Auth';
import { useState } from 'react';

import { useAtom } from "jotai";
import userAtom from '../store/userStore';

interface IFormInput {
  email: string,
  password: string
}

const SignIn: React.FC = () => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
        email: '',
        password: '',
    }
  })

  const [showToast, setShowToast] = useState(false)
  const [user, setUser] = useAtom(userAtom)

  const router = useIonRouter()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload = await SignInUser(data)
    if (payload) {
      await setUser(payload)
      const goToPage = () => {
        router.push('/my/club','none', 'replace')
      }
      goToPage()
    } else {
      setShowToast(true)
      reset({ email: '', password: ''})
    }
  }

  useIonViewWillEnter(() => {
    console.log('did enter sign in')
}, [])

  return (
    <IonPage>
      <IonContent fullscreen class='ion-padding'>
        <h3>Sign In</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonList>
              <IonItem>
                    <IonInput {...register('email')} placeholder='Email' clearInput={true}/>
                </IonItem>
                <IonItem>
                    <IonInput {...register('password')} placeholder='Password' clearInput={true}/>
                </IonItem>
            </IonList>
            <IonButton type='submit' expand='block' className='ion-margin-top'>Sign In</IonButton>
          </form>
            <p>New User?</p>
            <IonButton routerLink='/register' expand='block' className='ion-margin-top'>Register</IonButton>
          <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message="Password is incorrect. Please try again." />
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
