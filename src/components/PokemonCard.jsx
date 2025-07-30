// Shows a Pokémon card with its picture and name
export const PokemonCard = ({displayCardIndex, pokemonName, onCardClick}) => {
  // Builds the image URL using the Pokémon's index (starts at 1)
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${displayCardIndex + 1}.png`
  
    return (
      <div
        className="bg-white shadow-md hover:shadow-xl rounded-lg p-4 text-center cursor-pointer" onClick={() => onCardClick(pokemonName)}>
        {/* Pokémon picture */}
        <img src={imageUrl} alt={pokemonName} className="w-24 h-24 mx-auto" />
        {/* Pokémon name */}
        <p className="text-gray-800 mt-2 text-lg">{pokemonName}</p>
      </div>
    )
  }