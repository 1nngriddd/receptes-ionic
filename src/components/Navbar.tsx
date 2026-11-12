import { IonButtons, IonButton } from '@ionic/react';

function Navbar() {
  return (
    <IonButtons slot="end">
      <IonButton routerLink="/contact">Contacte</IonButton>
    </IonButtons>
  );
}

export default Navbar;
