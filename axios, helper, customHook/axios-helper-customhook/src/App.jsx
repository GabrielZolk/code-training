import './App.css'
import useAxios from './hook/use-axios'
import pokemonInstance from './helper/axios-instance'

function App() {
  const [pokemonList, loading, error] = useAxios({
    axiosInstance: pokemonInstance,
    method: 'GET',
    url: 'pokemon',
  })
  // const [pokedex, loadingPokedex, errorPokedex] = useAxios({
  //   axiosInstance: pokemonInstance,
  //   method: 'GET',
  //   url: 'pokedex',
  // })

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="App">
      Zolk
      <div>
        {pokemonList?.results?.map((pokemon, index) => <div key={index}>{pokemon.name}</div>)}
      </div>
      {/* <div>
        {pokedex?.results?.map((pokedex) => <div>{pokedex.name}</div>)}
      </div> */}
    </div>
  )
}

export default App
