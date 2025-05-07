export const PokemonCard = ({displayCardIndex, pokemonName, onCardClick}) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${displayCardIndex + 1}.png`
  
    return (
      <div
        className="bg-white shadow-md hover:shadow-xl rounded-lg p-4 text-center cursor-pointer" onClick={() => onCardClick(pokemonName)}>
        <img src={imageUrl} alt={pokemonName} className="w-24 h-24 mx-auto" />
        <p className="text-gray-800 mt-2 text-lg">{pokemonName}</p>
      </div>
    )
  }
  