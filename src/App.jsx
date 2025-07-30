import { useState, useEffect } from 'react'
import { PokemonCard } from './components/PokemonCard'
import { PokemonInfo } from './components/PokemonInfo'

// Main part of the Pokémon Gallery app
function App() {
  // Holds the list of Pokémon from the API
  const [pokemonList, setPokemonList] = useState([])
  // Keeps track of the selected Pokémon’s details
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  // Toggles the modal for showing Pokémon details
  const [showInfo, setShowInfo] = useState(false)

  // Loads the Pokémon list when the app starts
  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=250')
        const data = await res.json()
        if (data?.results) {
          setPokemonList(data.results)
        }
      } catch (error) {
        console.error('Failed to fetch Pokemon list')
      }
    }

    fetchList()
  }, [])

  // Gets details for a Pokémon when its card is clicked
  const handlePokemonClick = async (name) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      if (data) {
        setSelectedPokemon(data)
        setShowInfo(true)
      }
    } catch (error) {
      console.error(`Failed to fetch details for ${name}`)
    }
  }

  // Closes the details modal
  const handleClose = () => {
    setShowInfo(false)
    setSelectedPokemon(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 font-sans">
      {/* App title */}
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-10 drop-shadow">Pokemon Gallery</h1>
      {/* Grid of Pokémon cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.name}
          displayCardIndex={index}
          pokemonName={pokemon.name} 
          onCardClick={handlePokemonClick}
        />
      ))}

      </div>

      {/* Modal for Pokémon details */}
      {showInfo && selectedPokemon && (
        <PokemonInfo pokemon={selectedPokemon} onClose={handleClose} />
      )}
    </div>
  )
}

export default App