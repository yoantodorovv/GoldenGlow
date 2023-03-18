import { 
    GOOGLE_MAPS_API_KEY_MAIN,
    GOOGLE_MAPS_API_KEY_CAPITAL,
    GOOGLE_MAPS_API_KEY_COAST,
    GOOGLE_MAPS_API_KEY_BORDER,
} from '../secret';

export const mapService = {
    zoom: 13,
    mainPosition: {
        key: GOOGLE_MAPS_API_KEY_MAIN,
        lat: 43.078213, 
        lng: 25.618954 
    },
    capitalPosition: {
        key: GOOGLE_MAPS_API_KEY_CAPITAL,
        lat: 42.686925,
        lng: 23.265402
    },
    coastPosition: {
        key: GOOGLE_MAPS_API_KEY_COAST,
        lat: 43.209353, 
        lng: 27.915146
    },
    borderPosition: {
        key: GOOGLE_MAPS_API_KEY_BORDER,
        lat: 43.839585, 
        lng: 25.955367
    }
}