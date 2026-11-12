import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton
} from '@ionic/react';

function Contact() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Contacte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Contacte</h1>
        <p>Tens algun dubte o vols proposar una recepta? Escriu-nos!</p>
        <p>
          <strong>Email:</strong> receptes@exemple.cat
        </p>
        <p>
          <strong>Telèfon:</strong> 600 000 000
        </p>
      </IonContent>
    </IonPage>
  );
}

export default Contact;
