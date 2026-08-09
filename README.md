# 🧭 MyMap Explorer

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%20Modules-yellow?style=for-the-badge&logo=javascript)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![OpenStreetMap](https://img.shields.io/badge/Data-OpenStreetMap-7EBC6F?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

**MyMap Explorer** is an interactive map built with **Leaflet** and **OpenStreetMap** data, preloaded with 10 iconic Indian landmarks and ready for you to search, locate yourself, and drop your own custom pins — all persisted locally in your browser.

---

# 📑 Table of Contents

- Features
- Live Demo
- Technologies
- Project Structure
- How It Works
- Preloaded Landmarks
- Installation
- Browser Support
- Future Improvements
- Contributing
- License
- Author

---

# ✨ Features

✅ 🗺️ Interactive Leaflet Map — pan, zoom, and explore with OpenStreetMap tiles, centered on India by default

✅ 📌 10 Preloaded Landmarks — Gateway of India, Taj Mahal, India Gate, Red Fort, Golden Temple, and more, ready out of the box

✅ 🔍 Global Search — look up any city, town, district, state, or country via the **Nominatim** geocoding API

✅ 📍 "My Location" — center the map on your current position using the browser's Geolocation API

✅ 🧷 Custom Pin Dropping — drop and label your own pins directly on the map

✅ 💾 Persistent Pins — user-added pins are saved locally so they're still there on your next visit

✅ ❌ Delete Last / 🧽 Clear All — quickly remove your most recent pin or wipe all custom pins

✅ 📱 Device Detection — logs whether the app is running on mobile or desktop for easy debugging

✅ 🎨 Neon Dark UI — glassmorphism control bar with glowing cyan accents and custom-styled map popups

✅ Fully Responsive — controls stack cleanly on mobile screens

---

# 🚀 Live Demo

https://dhruvpandit46.github.io/Map/

---

# ⚙ Technologies Used

- HTML5
- CSS3 (glassmorphism, backdrop blur, responsive layout)
- JavaScript (Vanilla, ES6 Modules)
- [Leaflet.js](https://leafletjs.com/) — interactive map rendering
- OpenStreetMap tile layer
- Nominatim API — geocoding / place search
- Browser Geolocation API
- `localStorage` — custom pin persistence

---

# 📂 Project Structure

```
Map/
│
├── index.html
├── style.css
├── script.js
├── mapInit.js
├── geocode.js
├── pins.js
├── storage.js
├── sample-pins.json
└── README.md
```

| File | Responsibility |
|---|---|
| `script.js` | App entry point — wires up UI events and orchestrates the map |
| `mapInit.js` | Initializes the Leaflet map and loads pins from a JSON source |
| `geocode.js` | Wraps the Geolocation API for "My Location" |
| `pins.js` | Predefined landmark pins + rendering all pins to the map |
| `storage.js` | `localStorage` helpers for saving/loading custom pins |
| `sample-pins.json` | Example external pin data consumable via `addPinsFromJSON` |

---

# ⚡ How It Works

1. On load, `initializeMap()` centers a Leaflet map on India and adds the OpenStreetMap tile layer.
2. `renderAllPins()` places all **10 predefined landmark pins**, each with a labeled popup, plus any pins you've previously saved.
3. Type a place into the search bar and hit **Go** — the app queries the **Nominatim API** and flies the map to the first match, dropping a marker with the full place name.
4. Click **📍 My Location** to request your device's coordinates and center the map on your current position.
5. Drop a custom pin (via the map's drop-pin flow), label it, and it's saved to `localStorage` so it persists across sessions.
6. Use **❌ Delete Last Pin** or **🧽 Clear All Pins** to manage your custom pins — both reload the map to reflect the change.

---

# 📍 Preloaded Landmarks

| Landmark | City |
|---|---|
| Gateway of India | Mumbai |
| India Gate | New Delhi |
| Taj Mahal | Agra |
| Charminar | Hyderabad |
| Howrah Bridge | Kolkata |
| Bandra–Worli Sea Link | Mumbai |
| Red Fort | Delhi |
| Mysore Palace | Mysore |
| Golden Temple | Amritsar |
| Statue of Unity | Gujarat |

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/dhruvpandit46/Map.git
```

Go inside the project

```bash
cd Map
```

Run

This project uses ES6 modules, which most browsers block over `file://`. Serve it locally instead:

```bash
npx serve .
```

Then open the printed local URL in your browser.

---

# 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support (Geolocation requires user permission) |

Geolocation requires a **secure context** (`https://` or `localhost`) and explicit permission from the user.

---

# 🎯 Future Improvements

- Editable/removable individual pins (not just "last" or "all")
- Pin categories with custom icons/colors
- Route/directions between two points
- Import/export pins as GeoJSON
- Offline tile caching for low-connectivity use
- Search history / autocomplete suggestions

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

# 📜 License

Licensed under the **MIT License**.

MIT © 2026 Dhruv Pandit.

See the [LICENSE](LICENSE) file for full license details.

---

# 👨‍💻 Author

**Dhruv Pandit**

GitHub — https://github.com/dhruvpandit46

LinkedIn — https://linkedin.com/in/dhruv-pandit-755786326

Instagram — https://instagram.com/dhruv_pandit2007

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
It helps support future development.
