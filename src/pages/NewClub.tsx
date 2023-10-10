import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonList, IonItem, IonInput, IonButton, useIonRouter, useIonViewWillEnter } from "@ionic/react"
import { useForm, SubmitHandler } from 'react-hook-form'
import { CreateClub } from "../services/ClubServices"

import { useAtom } from "jotai";
import userAtom from '../store/userStore';

interface IFormInput {
  clubName: string
}

const NewClub = () => {
  const [user] = useAtom(userAtom)
  const router = useIonRouter()

  const { handleSubmit, register } = useForm({
    defaultValues: {
      clubName: ''
    }
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const newClub = await CreateClub(data)
    const goToPage = () => {
      router.push(`/my/club/id/${newClub.id}`, 'forward', 'replace')
    }
    goToPage()
  }

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
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <h3>New Club</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList >
            <IonItem>
              <IonInput
                {...register('clubName')} placeholder='Club Name' clearInput={true}/>
            </IonItem>
          </IonList>
          <IonButton type="submit" expand="block" className="ion-margin-top">Create</IonButton>
        </form>
      </IonContent>
    </IonPage>
  )
}

export default NewClub