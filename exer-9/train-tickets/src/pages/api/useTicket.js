import deleteTicket from "../../../server/mongodb/actions/deleteTicket"

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        try {
            const ticket = await deleteTicket(req.query.ticketId)
            if (ticket == null) {
                return res.status(400).send("Ticket not found")
            }
        } catch (e) {
            return res.status(500).send("Failed")
        }
        return res.status(200).send("Success")
    } else {
        return res.status(400).send("Bad request")
    }
}