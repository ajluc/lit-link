import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonList, IonItem, IonInput, IonButton } from "@ionic/react"
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { CreateClub } from "../services/ClubServices.js"

interface IFormInput {
  clubName: string
}

const NewClub = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      clubName: ''
    }
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const newClub = await CreateClub(data)
  }

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