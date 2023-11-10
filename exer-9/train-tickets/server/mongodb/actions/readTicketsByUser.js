import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function readTicketByUser(data) {
    try {
        await connectDB()
        const identifier = data

        return await Ticket.find({userId: identifier})
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read ticket. Invalid data or database issue.")
    }
}

