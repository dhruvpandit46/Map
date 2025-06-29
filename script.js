// 🗺 script.js - Master Control Card
import { initializeMap } from './mapInit.js';
import { getCurrentLocation } from './geocode.js';
import { renderAllPins, savePin } from './pins.js';

window.addEventListener('DOMContentLoaded', async () => {
  // 1️⃣ Initialize Leaflet map
  const map = initializeMap();

  // 2️⃣ Render all pins (static + stored)
  renderAllPins(map);

  // 3️⃣ Fix: Redraw map after DOM load
  setTimeout(() => {
    map.invalidateSize();
  }, 100);

  // 4️⃣ UI Elements
  const locateBtn = document.getElementById('locateMe');
  const dropBtn = document.getElementById('dropPin');
  const searchBtn = document.getElementById('search-btn');
  const searchBox = document.getElementById('search-box');
  const deleteLastBtn = document.getElementById('deleteLast');
  const clearAllBtn = document.getElementById('clearAll');

  // 5️⃣ My Location
  if (locateBtn) {
    locateBtn.addEventListener('click', async () => {
      const coords = await getCurrentLocation();
      if (!coords) {
        alert("Unable to fetch your location. Please allow location access.");
        return;
      }

      const { lat, lng } = coords;
      map.setView([lat, lng], 15);
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup('📍 You are here! (Approximate)')
        .openPopup();
    });
  }

  // 6️⃣ Drop Pin
  if (dropBtn) {
    dropBtn.addEventListener('click', () => {
      const label = prompt('Enter a label for your pin:');
      if (!label) return;

      const center = map.getCenter();
      const pin = {
        lat: center.lat,
        lon: center.lng,
        label
      };

      savePin(pin);
      L.marker([pin.lat, pin.lon]).addTo(map).bindPopup(pin.label);
    });
  }

  // 7️⃣ Search Location
  if (searchBtn && searchBox) {
    searchBtn.addEventListener('click', async () => {
      const query = searchBox.value.trim();
      if (!query) return alert('Please enter a location to search.');

      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

      try {
        const res = await fetch(url);
        const results = await res.json();

        if (results.length === 0) {
          alert('❌ No location found.');
          return;
        }

        const { lat, lon, display_name } = results[0];
        map.setView([lat, lon], 15);
        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(`📍 ${display_name}`)
          .openPopup();
      } catch (err) {
        alert('Error fetching location. Try again later.');
        console.error(err);
      }
    });
  }

  // 8️⃣ Delete Last Pin
  if (deleteLastBtn) {
    deleteLastBtn.addEventListener('click', () => {
      const pins = JSON.parse(localStorage.getItem('customPins') || '[]');
      if (pins.length === 0) return alert("No pins to delete!");

      pins.pop(); // Remove last
      localStorage.setItem('customPins', JSON.stringify(pins));
      location.reload();
    });
  }

  // 9️⃣ Clear All Pins
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      const confirmDelete = confirm("Are you sure you want to delete all pins?");
      if (!confirmDelete) return;

      localStorage.removeItem('customPins');
      location.reload();
    });
  }
});

// 🔍 Detect Device Type
const isMobile = /iPhone|iPad|Android|Mobile/i.test(navigator.userAgent);
console.log(isMobile ? "📱 Mobile device detected" : "💻 Desktop device detected");
