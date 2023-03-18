import { GOOGLE_MAPS_API_KEY} from '../secret';

export const key = GOOGLE_MAPS_API_KEY;
export const zoom = 13;
export const center = {
    lat: 43.078213, 
    lng: 25.618954
};

export const markerOptions = {
    label: {
        text: 'GoldenGlow Boutique',
        color: '#000',
        fontSize: '16px',
        fontWeight: 'bold',
    }
}

export const locations = [
    {
        name: 'Veliko Tarnovo',
        location: {
            lat: 43.078213, 
            lng: 25.618954
        }
    },
    {
        name: 'Sofia',
        location: {
            lat: 42.686925,
            lng: 23.265402
        }
    },
    {
        name: 'Varna',
        location: {
            lat: 43.209353, 
            lng: 27.915146
        }
    },
    {
        name: 'Ruse',
        location: {
            lat: 43.839585, 
            lng: 25.955367
        }
    }
]