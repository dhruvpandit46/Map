// geocode.js ✅
// Searches location using Nominatim API

/**
 * Search for a location and get coordinates
 * @param {string} query - The location to search
 * @returns {Promise<{lat: number, lon: number, display_name: string}>}
 */
// geocode.js
export async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return reject(null);
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (err) => {
        alert("Failed to get location.");
        console.error(err);
        reject(null);
      }
    );
  });
}
