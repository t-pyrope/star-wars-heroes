import {
    IonSegment, IonSegmentButton, IonLabel, IonTitle,
    IonToolbar, IonItem,
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
        <>
            <IonItem>
                <IonToolbar>
                    <IonTitle>Films</IonTitle>
                </IonToolbar>
            </IonItem>
            {
                isLoading ? <div style={{ paddingLeft: '0.5rem', paddingTop: '0.7rem' }}>Loading...</div>
                    : <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} mode="ios" scrollable={true}>
                        {!films.length ? '' : films.map(film =>
                            <IonSegmentButton value={film} key={film}>
                                <IonLabel>{film}</IonLabel>
                            </IonSegmentButton>)}
                    </IonSegment>
            }
        </>
    )
}

export default FilmsSegment;
