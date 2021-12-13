import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonSegment,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import './ViewMessage.css';
import { RootState } from '../redux/types';
import { getHero } from '../redux/actions/heroAction';
import FilmsSegment from '../components/FilmsSegment';

function ViewHero() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { heroName, isLoading, films, starships } = useSelector((state: RootState) => state.hero)

  useIonViewWillEnter(() => {
    dispatch(getHero(params.id))
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {!isLoading ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {heroName}
                  <span className="date">
                    {/* <IonNote>{message.date}</IonNote> */}
                  </span>
                </h2>
                <h3>
                  To: <IonNote>Me</IonNote>
                </h3>
              </IonLabel>
            </IonItem>
            <IonItem>
              <FilmsSegment />
            </IonItem>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewHero;
