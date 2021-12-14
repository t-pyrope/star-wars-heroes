import { IonList, IonItem } from '@ionic/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getStarships } from '../redux/actions/starshipAction';
import type { RootState } from '../redux/types';

const StarshipsList = (): React.ReactElement => {
    const dispatch = useDispatch();
    const { starships: urls } = useSelector((state: RootState) => state.hero);
    const { starships } = useSelector((state: RootState) => state.starships)

    useEffect(() => {
        dispatch(getStarships(urls))
    }, [dispatch, urls])

    return(
        <IonList lines="none">
            {starships.length ? starships.map(starship => <IonItem key={starship}>{starship}</IonItem>) : ''}
        </IonList>
    )
}

export default StarshipsList;
