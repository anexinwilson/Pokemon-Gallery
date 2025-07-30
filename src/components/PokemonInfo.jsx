// Shows a modal with details about a selected Pokémon
export const PokemonInfo = ({pokemon, onClose}) => {

 // Gets the Pokémon’s picture from its sprite data
 const pokemonImageUrl = pokemon.sprites.front_default;
  // Closes the modal if you click the background
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div onClick={handleClick} className="fixed inset-0 backdrop-blur-md bg-white/40 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl relative">
        {/* Button to close the modal */}
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-red-500 cursor-pointer">
          &times;
        </button>
        {/* Pokémon’s name */}
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">{pokemon.name}</h2>

        {/* Pokémon’s picture */}
        <img src={pokemonImageUrl} alt={pokemon.name} className="w-28 h-28 mx-auto mb-4" />

        <div className="text-sm">
          {/* List of abilities */}
          <h3 className="font-semibold text-gray-700 mb-1">Abilities</h3>
          <ul className="mb-3 pl-5 list-disc text-gray-600">
            {pokemon.abilities.map((abilityInfo) => (
              <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
            ))}
          </ul>

          {/* List of types */}
          <h3 className="font-semibold text-gray-700 mb-1">Types</h3>
          <ul className="mb-3 pl-5 list-disc text-gray-600">
            {pokemon.types.map((typeInfo) => (
              <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
            ))}
          </ul>

          {/* List of base stats */}
          <h3 className="font-semibold text-gray-700 mb-1">Base Stats</h3>
          <ul className="pl-5 list-disc text-gray-600">
            {pokemon.stats.map((statInfo) => (
              <li key={statInfo.stat.name}>{statInfo.stat.name}: {statInfo.base_stat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}