export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const id = Math.floor(Math.random() * 1017 + 1)
            const url = 'https://pokeapi.co/api/v2/pokemon/'
            const response = await fetch(url + id)
            const data = await response.json()
            res.status(200).json({name: data.name, sprite: data.sprites.front_default, types: data.types.map(types => types.type.name)})
        } catch (e) {
            res.status(400).json({error: 'Failed to get data'})
        }
    } else {
        res.status(500).json({error: 'Something went wrong'})
    }
}