import {
  IonItem, IonLabel
} from '@ionic/react';
import './HeroListItem.css';

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
