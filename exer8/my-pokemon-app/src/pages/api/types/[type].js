export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const type = req.query.type
            const url = 'https://pokeapi.co/api/v2/type/' + type
            const response = await fetch(url)
            const data = await response.json()
            res.status(200).json({pokemonWithType: data.pokemon.map(pokemon => pokemon.pokemon.name)})
        } catch (e) {
            res.status(400).json({error: 'Type does not exist'})
        }
    } else {
        res.status(500).json({error: 'Something went wrong'})
    }
}