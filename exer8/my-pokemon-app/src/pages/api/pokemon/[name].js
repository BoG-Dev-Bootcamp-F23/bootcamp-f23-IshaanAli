export default async function handler(req, res) {
    const name = req.query.name
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name;

    if (req.method === "GET") {
        if (name) {
            try {
                const response = await fetch(url)
                const data = await response.json()
                res.status(200).json({name: data.name, sprite: data.sprites.front_default, types: data.types.map(types => types.type.name)})
            } catch (e) {
                res.status(400).json({error: 'Pokemon does not exist'})
            }
        }
    } else {
        res.status(500).json({error: 'Something went wrong'})
    }
}