import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";


export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketId, userId } = data;
        return (Ticket.findByIdAndUpdate(ticketId, { userId: userId }));
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update ticket. Invalid data or database issue.");
    }
}