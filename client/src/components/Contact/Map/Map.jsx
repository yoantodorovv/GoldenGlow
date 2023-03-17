import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker, MarkerF } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../../secret';

import styles from './Map.module.scss';

export const Map = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_MAPS_API_KEY });

    if (!isLoaded) {
        //TODO: Return Loader
        return (
            <div>Loading...</div>
        )
    }

    const position = {lat: 43.078213, lng: 25.618954 };

    return (
        <GoogleMap 
            zoom={15} 
            center={position} 
            mapContainerClassName={styles['map-container']}
        >
            <MarkerF key={GOOGLE_MAPS_API_KEY} position={position} />
        </GoogleMap>
    );
}