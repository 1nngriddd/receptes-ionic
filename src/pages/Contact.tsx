import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/react';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacte</IonTitle>
          <Navbar />
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
