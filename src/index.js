window.initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.0, lng: -100.0},
        zoom: 5,
    });
}

// import { GoogleMapsOverlay } from '@deck.gl/google-maps';
// import { HexagonLayer } from '@deck.gl/aggregation-layers';
// import ScatterplotLayer 