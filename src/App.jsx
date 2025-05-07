import { useState, useEffect } from 'react'
import { PokemonCard } from './components/PokemonCard'
import { PokemonInfo } from './components/PokemonInfo'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [showInfo, setShowInfo] = useState(false)

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

  const handleClose = () => {
    setShowInfo(false)
    setSelectedPokemon(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-10 drop-shadow">Pokemon Gallery</h1>
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

      {showInfo && selectedPokemon && (
        <PokemonInfo pokemon={selectedPokemon} onClose={handleClose} />
      )}
    </div>
  )
}

export default App
