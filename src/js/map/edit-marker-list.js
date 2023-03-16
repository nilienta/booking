import { marker } from 'leaflet';

import { mapCity } from './create-map.js';
import { usualIconMarker } from './map.js';
import { createPopupAd } from './supply-element.js';

export const markersList = {
  currentMarkers: [],
  del() {
    this.currentMarkers.forEach((markerAd) => {
      mapCity.removeLayer(markerAd);
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
      markerAd.addTo(mapCity).bindPopup(createPopupAd(ad), {
        keepInView: true,
      });
    });
  },
  update(sortedArray) {
    this.del();
    this.add(sortedArray);
  },
};
