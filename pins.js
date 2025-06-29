// pins.js ✅
// Handles both hardcoded pins and dynamic saved pins via localStorage

const PINS_KEY = 'map_app_saved_pins';

export const predefinedPins = [
  {
    id: "pin1",
    title: "Gateway of India",
    lat: 18.921984,
    lon: 72.834654,
    popup: "🕌 Gateway of India, Mumbai"
  },
  {
    id: "pin2",
    title: "India Gate",
    lat: 28.612912,
    lon: 77.229509,
    popup: "🇮🇳 India Gate, New Delhi"
  },
  {
    id: "pin3",
    title: "Taj Mahal",
    lat: 27.175015,
    lon: 78.042155,
    popup: "🕌 Taj Mahal, Agra"
  },
  {
    id: "pin4",
    title: "Charminar",
    lat: 17.361563,
    lon: 78.474665,
    popup: "🕌 Charminar, Hyderabad"
  },
  {
    id: "pin5",
    title: "Howrah Bridge",
    lat: 22.585052,
    lon: 88.346401,
    popup: "🌉 Howrah Bridge, Kolkata"
  },
  {
    id: "pin6",
    title: "Bandra-Worli Sea Link",
    lat: 19.012305,
    lon: 72.814972,
    popup: "🌉 Bandra-Worli Sea Link"
  },
  {
    id: "pin7",
    title: "Red Fort",
    lat: 28.656159,
    lon: 77.241020,
    popup: "🏰 Red Fort, Delhi"
  },
  {
    id: "pin8",
    title: "Mysore Palace",
    lat: 12.305163,
    lon: 76.655208,
    popup: "🏰 Mysore Palace"
  },
  {
    id: "pin9",
    title: "Golden Temple",
    lat: 31.620017,
    lon: 74.876484,
    popup: "🛕 Golden Temple, Amritsar"
  },
  {
    id: "pin10",
    title: "Statue of Unity",
    lat: 21.838043,
    lon: 73.719102,
    popup: "🗿 Statue of Unity"
  }
];

/**
 * Get all user-saved pins from localStorage
 * @returns {Array<{lat: number, lon: number, label: string}>}
 */
export function getSavedPins() {
  try {
    const raw = localStorage.getItem(PINS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Error loading pins:", err);
    return [];
  }
}

/**
 * Save a new user pin
 * @param {{lat: number, lon: number, label: string}} pin 
 */
export function savePin(pin) {
  const pins = getSavedPins();
  pins.push(pin);
  localStorage.setItem(PINS_KEY, JSON.stringify(pins));
}

/**
 * Render all pins (both hardcoded and user-saved) on the map
 * @param {L.Map} map
 */
export function renderAllPins(map) {
  // Hardcoded pins
  predefinedPins.forEach(pin => {
    const marker = L.marker([pin.lat, pin.lon]).addTo(map);
    marker.bindPopup(`<b>${pin.popup}</b>`);
  });

  // User saved pins
  getSavedPins().forEach(pin => {
    const marker = L.marker([pin.lat, pin.lon]).addTo(map);
    marker.bindPopup(`<b>${pin.label}</b>`);
  });
}
