import { useEffect, useRef, useState } from "react"


export default function useAxios(configRequest) {
    const { axiosInstance, method, url, othersConfig = {} } = configRequest

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const effectRun = useRef(false)

    useEffect(() => {
        //CleanUP
        const controller = new AbortController()


        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...othersConfig,
                    signal: controller.signal,
                })

                setData(res.data)
            } catch (err) {
                console.log(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        if(effectRun.current) fetchData()

        return () => {
            controller.abort()
            effectRun.current = true
        }
    }, [])

    return [data, loading, error]
}

// const [pokemonList, setPokemonList] = useState([])
// const [pokedexList, setPokedexList] = useState([])

// useEffect(() => {
//   axiosInstance

//     .get('pokemon')
//     .then((res) => {
//       setPokemonList(res.data.results)
//     })
//     .catch((err) => console.log(err))

//     axiosInstance

//     .get('pokedex')
//     .then((res) => {
//       setPokedexList(res.data.results)
//     })
//     .catch((err) => console.log(err))

// }, [])
