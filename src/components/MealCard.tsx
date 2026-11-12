import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react';
import InfoLine from './InfoLine';
import type { Meal } from '../types/Meal';

interface Props {
  meal: Meal;
}

function MealCard({ meal }: Props) {
  return (
    <IonCard>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <IonCardHeader>
        <IonCardTitle>{meal.strMeal}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <InfoLine label="Categoria" value={meal.strCategory} />
        <InfoLine label="Origen" value={meal.strArea} />

        <IonButton expand="block" routerLink={'/recipe/' + meal.idMeal}>
          Veure recepta
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default MealCard;
