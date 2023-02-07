import { map } from "./map";
import { usualIconMarker } from "./map";
import createPopupAd from "./supply-element.js";

const markersList = {
  currentMarkers: [],
  del() {
    this.currentMarkers.forEach((marker) => {
      map.removeLayer(marker);
    });
  },
  add(adList) {
    adList.forEach((ad) => {
      const marker = L.marker(
        {
          lat: ad.location.lat,
          lng: ad.location.lng,
        },
        {
          icon: usualIconMarker,
        }
      );
      this.currentMarkers.push(marker);
      marker.addTo(map).bindPopup(createPopupAd(ad), {
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
