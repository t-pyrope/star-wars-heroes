import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    useIonViewWillEnter, IonSegment, IonSegmentButton,
    IonLabel,
} from '@ionic/react';

import { RootState } from '../redux/types';
import { getFilms } from '../redux/actions/filmsAction';

const FilmsSegment = () => {
    const { films, isLoading } = useSelector((state: RootState) => state.films);
    const { films: heroFilms } = useSelector((state: RootState) => state.hero);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilms(heroFilms))
    }, [heroFilms, dispatch])

    return(
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} mode="ios">
            {!films.length ? '' : films.map(film =>
                <IonSegmentButton value={film} key={film}>
                    <IonLabel>{film}</IonLabel>
                </IonSegmentButton>)}
        </IonSegment>
    )
}

export default FilmsSegment;
