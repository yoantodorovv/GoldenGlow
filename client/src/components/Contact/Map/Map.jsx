import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { mapService } from '../../../services/googleMapsSerice'

import styles from './Map.module.scss';

export const Map = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: mapService.mainPosition.key });

    if (!isLoaded) {
        //TODO: Return Loader
        return (
            <div>Loading...</div>
        )
    }

    return (
        <GoogleMap 
            zoom={mapService.zoom} 
            center={mapService.mainPosition} 
            mapContainerClassName={styles['map-container']}
        >
            <MarkerF key={mapService.mainPosition.key} position={mapService.mainPosition} />
            <MarkerF key={mapService.capitalPosition.key} position={mapService.capitalPosition} />
            <MarkerF key={mapService.coastPosition.key} position={mapService.coastPosition} />
            <MarkerF key={mapService.borderPosition.key} position={mapService.borderPosition} />
        </GoogleMap>
    );
}