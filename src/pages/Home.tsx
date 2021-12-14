import {
  IonContent, IonHeader, IonInfiniteScroll,
  IonInfiniteScrollContent, IonList, IonPage,
  IonRefresher, IonRefresherContent, IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState, useEffect } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';

import HeroListItem from '../components/HeroListItem';
import { getHeroes } from '../redux/actions/heroesAction';
import type { RootState, HeroFromAPIType } from '../redux/types';

const Home: React.FC = () => {
  const [data, setData] = useState<HeroFromAPIType[]>([])
  const [page, setPage] = useState("1");
  const [infiniteDisabled, setInfiniteDisabled] = useState(false);
  const dispatch = useDispatch();
  const { heroes, isLoading, totalPages } = useSelector((state: RootState) => state.heroes);

  useEffect(() => {
    dispatch(getHeroes(page))
  }, [page, dispatch]);

  useEffect(() => {
    if (!data.length || (heroes[heroes.length - 1].name !== data[data.length - 1].name)) {
      setData(d => [...d, ...heroes])
    }
  }, [heroes])

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const getHeroId = (url: string) => {
    const arr = url.split("/");
    return arr[arr.length - 2]
  }

  const loadData = (e: any) => {
    const p = +page + 1;
    if (p <= totalPages) {
      setPage(String(p))
      e.target.complete();
    } else {
      setInfiniteDisabled(true);
    }
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
          {!data.length ? "" : data.map(hero => <HeroListItem key={hero.name} heroName={hero.name} heroId={getHeroId(hero.url)}  />)}
        </IonList>

        <IonInfiniteScroll
          onIonInfinite={loadData}
          threshold="50px"
          disabled={infiniteDisabled}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
