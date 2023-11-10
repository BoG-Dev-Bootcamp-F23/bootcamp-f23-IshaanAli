import readTicketsByUser from '../../../server/mongodb/actions/readTicketsByUser';

export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const user = await readTicketsByUser(req.query.userId)
            if (user == false) {
                return res.status(400).send("Failed")
            }
            return res.status(200).send(user)
        } catch (e) {
            return res.status(500).send("User not found")
        }
    } else {
        return res.status(400).send("Bad request")
    }
}

