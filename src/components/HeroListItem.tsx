import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
// import { Message } from '../data/messages';
import './MessageListItem.css';

interface HeroListItemProps {
  heroName: string,
  heroId: string,
}

const HeroListItem: React.FC<HeroListItemProps> = ({ heroName, heroId }) => {
  return (
    <IonItem routerLink={`/hero/${heroId}`} detail={false}>
      <div slot="start" className="dot"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {heroName}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default HeroListItem;
