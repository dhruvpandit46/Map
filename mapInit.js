// mapInit.js

/**
 * Initializes the Leaflet map centered on India.
 * @returns {L.Map} - The initialized Leaflet map.
 */
export function initializeMap() {
  const map = L.map('map').setView([20.5937, 78.9629], 5); // India center

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  return map;
}

/**
 * Loads and adds pins from an external JSON file to the map.
 * @param {L.Map} map - Leaflet map instance.
 * @param {string} url - Path to the JSON file.
 */
export async function addPinsFromJSON(map, url) {
  try {
    const res = await fetch(url);
    const pins = await res.json();

    pins.forEach(pin => {
      const marker = L.marker([pin.lat, pin.lon]).addTo(map);
      marker.bindPopup(pin.popup || pin.label || "📍 Location");
    });
  } catch (err) {
    console.error('❌ Failed to load pins from JSON:', err);
  }
}
