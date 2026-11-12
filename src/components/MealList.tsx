import MealCard from './MealCard';
import type { Meal } from '../types/Meal';

interface Props {
  meals: Meal[];
}

function MealList({ meals }: Props) {
  return (
    <>
      {meals.map(meal => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </>
  );
}

export default MealList;
