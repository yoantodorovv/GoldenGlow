import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import * as mapService from '../../../services/googleMapsSerice'

import styles from './Map.module.scss';

export const Map = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: mapService.key });

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <GoogleMap 
            zoom={mapService.zoom} 
            center={mapService.center} 
            mapContainerClassName={styles['map-container']}
        >
            {mapService.locations.map((location, index) => (
                <MarkerF 
                    key={index} 
                    position={location.location}
                    label={location.name}
                    options={mapService.markerOptions}
                />
            ))}
        </GoogleMap>
    );
}