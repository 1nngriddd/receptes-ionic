import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonImg
} from '@ionic/react';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import InfoLine from '../components/InfoLine';
import IngredientList from '../components/IngredientList';
import type { Meal } from '../types/Meal';

function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMeal() {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
        );
        if (!response.ok) {
          throw new Error('Error carregant la recepta.');
        }
        const data = await response.json();
        if (!data.meals) {
          throw new Error('Recepta no trobada.');
        }
        setMeal(data.meals[0]);
      } catch (err) {
        console.error('Error:', err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getMeal();
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="Tornar" />
          </IonButtons>
          <IonTitle>Recepta</IonTitle>
          <Navbar />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && meal && (
          <>
            <h1>{meal.strMeal}</h1>
            <IonImg src={meal.strMealThumb} alt={meal.strMeal} />
            <InfoLine label="Origen" value={meal.strArea} />
            <InfoLine label="Categoria" value={meal.strCategory} />
            <h2>Ingredients</h2>
            <IngredientList meal={meal} />
            <h2>Instruccions</h2>
            <p>{meal.strInstructions}</p>
          </>
        )}
      </IonContent>
    </IonPage>
  );
}

export default RecipeDetail;
