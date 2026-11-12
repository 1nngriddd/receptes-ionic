import { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/react';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MealList from '../components/MealList';
import type { Meal } from '../types/Meal';

function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
        );
        if (!response.ok) {
          throw new Error('Error carregant receptes.');
        }
        const data = await response.json();
        setMeals(data.meals);
      } catch (err) {
        console.error('Error:', err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getMeals();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Llistat de Receptes</IonTitle>
          <Navbar />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && <MealList meals={meals} />}
      </IonContent>
    </IonPage>
  );
}

export default Home;
