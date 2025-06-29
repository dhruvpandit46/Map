// storage.js ✅
// Handles saving and loading user-added pins to/from LocalStorage

const STORAGE_KEY = 'custom_map_pins';

/**
 * Load saved pins from localStorage
 * @returns {Array} Array of pin objects
 */
export function loadPins() {
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to parse saved pins:', e);
    return [];
  }
}

/**
 * Save an array of pins to localStorage
 * @param {Array} pins 
 */
export function savePins(pins) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pins));
  } catch (e) {
    console.error('Failed to save pins:', e);
  }
}
