import MessageListItem from '../components/HeroListItem';
import { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';

import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from '../redux/actions/heroesAction';
import { RootState, HeroFromAPIType } from '../redux/types';

const Home: React.FC = () => {
  const [data, setData] = useState<HeroFromAPIType[]>([])
  const [page, setPage] = useState("1")
  const dispatch = useDispatch();
  const { heroes, isLoading, totalPages } = useSelector((state: RootState) => state.heroes);

  useEffect(() => {
    dispatch(getHeroes(page))
  }, [page]);

  useEffect(() => {
    setData([...data, ...heroes])
  }, [heroes])

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const getHeroId = (url: string) => {
    let arr = url.split("/");
    return arr[arr.length - 2]
  }

  const loadData = () => {
    let p = +page + 1;
    if (p < totalPages) setPage(String(p))
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Star Wars Heroes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList lines="full">
          {isLoading ? "" : heroes.map(hero => <MessageListItem key={hero.name} heroName={hero.name} heroId={getHeroId(hero.url)}  />)}
        </IonList>
      </IonContent>

      <IonInfiniteScroll
          onIonInfinite={loadData}
          threshold="100px"
          disabled={false}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
    </IonPage>
  );
};

export default Home;
