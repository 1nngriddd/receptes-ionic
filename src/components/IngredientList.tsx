import { IonList, IonItem, IonLabel } from '@ionic/react';
import type { Meal } from '../types/Meal';

interface Props {
  meal: Meal;
}

function IngredientList({ meal }: Props) {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const name = meal['strIngredient' + i];
    const measure = meal['strMeasure' + i];
    if (name) {
      ingredients.push(measure + ' ' + name);
    }
  }

  return (
    <IonList>
      {ingredients.map(item => (
        <IonItem key={item}>
          <IonLabel>{item}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
}

export default IngredientList;
