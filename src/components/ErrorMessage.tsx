import { IonText } from '@ionic/react';

interface Props {
  message: string;
}

function ErrorMessage({ message }: Props) {
  return (
    <IonText>
      <p>{message}</p>
    </IonText>
  );
}

export default ErrorMessage;
