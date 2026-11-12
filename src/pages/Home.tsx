import { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonSelect,
  IonSelectOption
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

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

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

  const filteredMeals = meals.filter(meal => {
    const matchSearch = meal.strMeal
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === 'All' || meal.strCategory === category;

    return matchSearch && matchCategory;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Receptes</IonTitle>
          <Navbar />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={search}
          placeholder="Cerca una recepta..."
          onIonInput={e => setSearch(e.detail.value ?? '')}
        />

        <IonSelect
          label="Categoria"
          labelPlacement="stacked"
          value={category}
          onIonChange={e => setCategory(e.detail.value)}
        >
          <IonSelectOption value="All">Totes</IonSelectOption>
          <IonSelectOption value="Chicken">Chicken</IonSelectOption>
          <IonSelectOption value="Side">Side</IonSelectOption>
          <IonSelectOption value="Starter">Starter</IonSelectOption>
          <IonSelectOption value="Miscellaneous">Miscellaneous</IonSelectOption>
        </IonSelect>

        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <>
            <h2>Resultats: {filteredMeals.length}</h2>
            <MealList meals={filteredMeals} />
          </>
        )}
      </IonContent>
    </IonPage>
  );
}

export default Home;
