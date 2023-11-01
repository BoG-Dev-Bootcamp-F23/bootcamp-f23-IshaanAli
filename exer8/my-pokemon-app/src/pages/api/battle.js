export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const pokemon1 = req.body.pokemon1
            const pokemon2 = req.body.pokemon2

            const url = 'https://pokeapi.co/api/v2/pokemon/'

            const response1 = await fetch(url + pokemon1)
            const response2 = await fetch(url + pokemon2)

            const data1 = await response1.json()
            const data2 = await response2.json()

            if (data1.stats[0].base_stat > data2.stats[0].base_stat) {
                res.status(200).json({WinnerOfBattle: pokemon1})
            } else if (data2.stats[0].base_stat > data1.stats[0].base_stat) {
                res.status(200).json({'Winner Of Battle': pokemon2})
            } else {
                res.status(200).json({'Winner Of Battle': 'The battle ended in a draw!'})
            }
        } catch (e) {
            res.status(400).json({error: 'At least one of the pokemon does not exist'})
        }
    } else {
        res.status(500).json({error: 'Something went wrong...'})
    }
}