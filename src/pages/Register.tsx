import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { RegisterUser } from '../services/Auth';

interface IFormInput {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const Register: React.FC = () => {
    const { handleSubmit, register } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    })
    
    const router = useIonRouter()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await RegisterUser(data)
        const goToPage = () => {
            router.push('/signin','none', 'replace')
        }
        goToPage()
    }

    useIonViewWillEnter(() => {
        console.log('did enter register')
    }, [])

    return (
        <IonPage>
            <IonContent fullscreen class='ion-padding'>
                <h3>Register</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonList>
                        <IonItem>
                            <IonInput {...register('firstName')} placeholder='First Name' clearInput={true}/>
                        </IonItem>
                        <IonItem>
                            <IonInput {...register('lastName')} placeholder='Last Name' clearInput={true}/>
                        </IonItem>
                        <IonItem>
                            <IonInput {...register('email')} placeholder='Email' clearInput={true}/>
                        </IonItem>
                        <IonItem>
                            <IonInput {...register('password')} placeholder='Password' clearInput={true}/>
                        </IonItem>
                    </IonList>
                    <IonButton type='submit' expand='block' className='ion-margin-top'>Register</IonButton>
                </form>
                <p>Existing user?</p>
                <IonButton routerLink='/signin' routerDirection='back' expand='block' className='ion-margin-top'>Sign In</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Register;
