import { IonList, IonItem, IonToolbar, IonTitle } from '@ionic/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getStarships } from '../redux/actions/starshipAction';
import type { RootState } from '../redux/types';

const StarshipsList = (): React.ReactElement => {
    const dispatch = useDispatch();
    const { starships: urls } = useSelector((state: RootState) => state.hero);
    const { starships, isLoading } = useSelector((state: RootState) => state.starships)

    useEffect(() => {
        dispatch(getStarships(urls))
    }, [dispatch, urls])

    return(
        <>
            <IonItem>
                <IonToolbar>
                    <IonTitle>Starships</IonTitle>
                </IonToolbar>
            </IonItem>
            <div style={{ paddingLeft: '0.5rem' }}>
                {
                    isLoading ? <p>Loading...</p> : starships.length ? <IonItem>
                            <IonList lines="none" mode="ios">
                                {starships.length ? starships.map(starship => <IonItem key={starship}>{starship}</IonItem>) : ''}
                            </IonList>
                    </IonItem> : <p>No starships</p>
                }
            </div>
        </>
    )
}

export default StarshipsList;
