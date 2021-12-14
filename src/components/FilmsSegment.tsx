import {
    IonSegment, IonSegmentButton, IonLabel,
} from '@ionic/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilms } from '../redux/actions/filmsAction';
import type { RootState } from '../redux/types';

const FilmsSegment = (): React.ReactElement => {
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
