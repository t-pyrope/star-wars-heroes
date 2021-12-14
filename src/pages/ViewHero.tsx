import {
  IonBackButton, IonButtons, IonContent,
  IonHeader, IonItem, IonLabel, IonNote,
  IonPage, IonToolbar, useIonViewWillEnter,
} from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import './ViewHero.css';
import starWarsIcon from '../assets/img/light-saber.png';
import FilmsSegment from '../components/FilmsSegment';
import StarshipsList from '../components/StarshipsList';
import { getHero } from '../redux/actions/heroAction';
import type { RootState } from '../redux/types';

const ViewHero = (): React.ReactElement => {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { heroName, isLoading, birthYear } = useSelector((state: RootState) => state.hero)

  useIonViewWillEnter(() => {
    dispatch(getHero(params.id))
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text=" Back to the list" defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {!isLoading ? (
          <>
            <IonItem>
              <img src={starWarsIcon} alt="" width="50" height="50" style={{ padding: '0.5rem' }} />
              {' '}
              <IonLabel className="ion-text-wrap">
                <h2>
                  {heroName}
                </h2>
                <h3>
                  <IonNote>Year or birth: {birthYear}</IonNote>
                </h3>
              </IonLabel>
            </IonItem>
            <FilmsSegment />
            <StarshipsList />
          </>
        ) : ''}
      </IonContent>
    </IonPage>
  );
}

export default ViewHero;
