import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res) {
    if (req.method == 'PATCH') {
        try {
            const ticket = await updateTicketByUser(req.body)
            if (ticket == null) {
                return res.status(400).send("Ticket or User not found")
            }
            if (ticket == false) {
                return res.status(400).send("User not found")
            }
            return res.status(200).send("Success")
        } catch (e) {
            return res.status(500).send("Failed")
        }
    } else {
        return res.status(400).send("Bad request")
    }
}

