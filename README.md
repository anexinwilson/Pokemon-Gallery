# Pokemon Gallery

A fun React app that pulls Pokémon data from the PokeAPI. You can browse a grid of Pokémon cards, click to see details like abilities, types, and stats in a pop-up modal, and enjoy a clean, mobile-friendly design.

## Features

- **Browse Pokémon**: Check out a grid of Pokémon cards with their pictures and names
- **See Details**: Click a card to pop open a modal with the Pokémon’s abilities, types, and stats
- **Mobile-Friendly**: Looks great on phones and desktops thanks to Tailwind CSS
- **API Powered**: Grabs data from the PokeAPI for up to 250 Pokémon
- **Smooth UI**: Easy-to-use modal with a click-outside-to-close feature

## Tech Stack

- **Frontend**: React 18+, Tailwind CSS, Axios
- **API**: PokeAPI (https://pokeapi.co/)
- **Tools**: Vite

## Installation

### What You Need
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Grab the code**:
   ```bash
   git clone https://github.com/your-username/pokemon-gallery.git
   cd pokemon-gallery
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to see it in action

## How to Use

1. **Browse Pokémon**: The main page shows a grid of Pokémon cards
2. **Check Details**: Click any card to see a modal with more info
3. **Close Modal**: Hit the close button or click outside the modal to go back

## Project Structure

```
pokemon-gallery/
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx
│   │   └── PokemonInfo.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Dependencies

- react
- react-dom
- axios
- tailwindcss
- vite (for building and running the app)

## Notes

- The app uses the PokeAPI, which might have occasional hiccups or rate limits. Make sure you’re online!
- It loads the first 250 Pokémon to keep things fast but still show plenty of content.
