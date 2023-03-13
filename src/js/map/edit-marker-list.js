import { map, usualIconMarker } from './map.js';
import createPopupAd from './supply-element.js';
import { marker } from 'leaflet';

const markersList = {
  currentMarkers: [],
  del() {
    this.currentMarkers.forEach((marker) => {
      map.removeLayer(marker);
    });
  },
  add(adList) {
    adList.forEach((ad) => {
      const markerAd = marker(
        {
          lat: ad.location.lat,
          lng: ad.location.lng,
        },
        {
          icon: usualIconMarker,
        }
      );
      this.currentMarkers.push(markerAd);
      markerAd.addTo(map).bindPopup(createPopupAd(ad), {
        keepInView: true,
      });
    });
  },
  update(sortedArray) {
    this.del();
    this.add(sortedArray);
  },
};

export default markersList;
