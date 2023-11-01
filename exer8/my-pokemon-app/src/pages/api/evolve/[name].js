export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const name = req.query.name
            const url = 'https://pokeapi.co/api/v2/pokemon-species/' + name

            let response = await fetch(url)
            let data = await response.json()

            response = await fetch(data.evolution_chain.url)
            data = await response.json()

            if (data.chain.species.name == name && data.chain.evolves_to.length == 0) {
                res.status(200).json({Evolves_to: 'There is no further evolution, so the pokemon remains ' + data.chain.species.name})
            } else if (data.chain.species.name == name && data.chain.evolves_to.length != 0) {
                res.status(200).json({Evolves_to: data.chain.evolves_to[0].species.name})
            }

            if (data.chain.evolves_to[0].species.name == name && data.chain.evolves_to[0].evolves_to.length == 0) {
                res.status(200).json({Evolves_to: 'There is no further evolution, so the pokemon remains ' + data.chain.evolves_to[0].species.name})
            } else if (data.chain.evolves_to[0].species.name == name && data.chain.evolves_to[0].evolves_to.length != 0) {
                res.status(200).json({Evolves_to: data.chain.evolves_to[0].evolves_to[0].species.name})
            }

            if (data.chain.evolves_to[0].evolves_to[0].species.name == name && data.chain.evolves_to[0].evolves_to[0].evolves_to.length == 0) {
                res.status(200).json({Evolves_to: 'There is no further evolution, so the pokemon remains ' + data.chain.evolves_to[0].evolves_to[0].species.name})
            }
            
        } catch (e) {
            res.status(400).json({error: 'The pokemon does not exist'})
        }
    } else {
        res.status(500).json({error: 'Something went wrong...'})
    }
}
