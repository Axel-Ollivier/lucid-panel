# 🌦️🧘 LucidPanel – Météo & Focus Dashboard en Liquid Glass

**LucidPanel** est un tableau de bord minimaliste conçu avec Vue 3. Il combine la météo en temps réel, un timer Pomodoro fluide, des sons d’ambiance relaxants et des citations inspirantes — le tout dans un style visuel **"liquid glass"** inspiré des interfaces Apple (macOS Sonoma / iOS).

## 🧪 Objectif

Créer une application web élégante pour accompagner des sessions de travail ou de détente, en combinant des données en direct (météo), un timer interactif et un habillage sonore doux — avec un focus sur le design et l’expérience utilisateur.

---

## 📦 Stack technique

- Vue 3 + Vite
- Composition API
- TailwindCSS ou CSS custom
- API météo (e.g. Open-Meteo ou WeatherAPI)
- File audio locale pour les ambiances
- LocalStorage pour les préférences

---

## 🧱 Structure du projet

lucid-panel/
├─ public/
│ └─ ambient/ # sons (ogg/mp3)
├─ src/
│ ├─ assets/
│ ├─ components/
│ │ ├─ WeatherPanel.vue
│ │ ├─ PomodoroTimer.vue
│ │ ├─ AmbientPlayer.vue
│ │ ├─ QuoteBox.vue
│ │ └─ GlassCard.vue
│ ├─ utils/
│ │ └─ weatherAPI.ts
│ ├─ App.vue
│ └─ main.ts
├─ index.html
└─ vite.config.ts


---

## 🧩 Composants à implémenter

### `GlassCard.vue`
Composant de base stylisé façon "liquid glass", utilisé pour contenir les autres widgets.

### `WeatherPanel.vue`
Affiche :
- Température actuelle
- Ville (auto ou input)
- Icône + animation de fond selon la météo (nuage, pluie, soleil)

Utilise une API météo externe (type Open-Meteo).

### `PomodoroTimer.vue`
Timer Pomodoro visuel avec animation circulaire SVG :
- 25 min focus, 5 min break
- Bouton Start/Reset
- Possibilité d’afficher un message motivant en fin de cycle

### `AmbientPlayer.vue`
Lecteur audio minimaliste :
- Playlist de sons relaxants (pluie, vent, feu…)
- Bouton play/pause
- Volume ajustable

### `QuoteBox.vue`
Citation inspirante toutes les X minutes :
- Stock local ou API de citations
- Transitions douces

---

## 🎨 Design Liquid Glass

Utilise des éléments visuels :
- `backdrop-filter: blur(...)`
- `rgba` semi-transparents
- bordures douces, coins arrondis, ombres légères
- transitions CSS douces

Exemple de style :

```css
.glass-card {
  backdrop-filter: blur(20px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
}

🔧 Fonctionnalités bonus possibles

    Mode clair/sombre

    "Zen mode" qui masque tout sauf le timer

    Préférences utilisateur en localStorage

    Drag-and-drop pour réorganiser les modules


🚀 Lancer le projet

npm install
npm run dev

📌 À coder en priorité

    GlassCard.vue : composant générique de style

    WeatherPanel.vue : intégrer une API météo simple

    PomodoroTimer.vue : logique de timer et animation

    AmbientPlayer.vue : lecture audio de fichiers locaux

    QuoteBox.vue : système de rotation de citations

✅ But final

Avoir un tableau de bord tout-en-un, fluide, apaisant et élégant, utilisable en full screen comme interface de concentration ou de relaxation.
🧠 Inspirations

    Interfaces Apple (macOS Ventura / Sonoma)

    Craft.do / Notion / Transparent UI trends

    Ambiances de FocusRoom, RainyMood, Calm

