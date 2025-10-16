const { Ticket } = require("../models");
const CrudRepository = require("./crud-repository");

class TicketRepository extends CrudRepository {
    constructor() {
        super(Ticket);
    }

    async getPendingTickets() {
        const response = await Ticket.findAll({ where: { status: 'pending' } });
        return response;
    }
}

module.exports = TicketRepository;