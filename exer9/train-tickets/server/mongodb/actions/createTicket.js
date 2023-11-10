import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function createTicket(data) {
    try {
        await connectDB()
        const ticket = new Ticket(data)
        await ticket.save()
        return true;
    } catch (e) {
        console.log(e)
        throw new Error("Unable to create ticket. Invalid data or database issue.")
    }
}