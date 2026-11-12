import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg
} from '@ionic/react';
import InfoLine from './InfoLine';
import type { Meal } from '../types/Meal';

interface Props {
  meal: Meal;
}

function MealCard({ meal }: Props) {
  return (
    <IonCard routerLink={'/recipe/' + meal.idMeal}>
      <IonImg src={meal.strMealThumb} alt={meal.strMeal} />
      <IonCardHeader>
        <IonCardTitle>{meal.strMeal}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <InfoLine label="Categoria" value={meal.strCategory} />
        <InfoLine label="Origen" value={meal.strArea} />
      </IonCardContent>
    </IonCard>
  );
}

export default MealCard;
