import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IonList, IonItem } from '@ionic/react';

import { RootState } from '../redux/types';
import { getStarships } from '../redux/actions/starshipAction';

const StarshipsList = () => {
    const dispatch = useDispatch();
    const { starships: urls } = useSelector((state: RootState) => state.hero);
    const { starships } = useSelector((state: RootState) => state.starships)

    useEffect(() => {
        dispatch(getStarships(urls))
    }, [dispatch, urls])

    return(
        <IonList>
            {starships.length ? starships.map(starship => <IonItem key={starship}>{starship}</IonItem>) : ''}
        </IonList>
    )
}

export default StarshipsList;
