"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("../events/event.entity");
const ticket_entity_1 = require("../tickets/ticket.entity");
let ReportsService = class ReportsService {
    eventsRepo;
    ticketsRepo;
    constructor(eventsRepo, ticketsRepo) {
        this.eventsRepo = eventsRepo;
        this.ticketsRepo = ticketsRepo;
    }
    async eventSummary(eventId) {
        const event = await this.eventsRepo.findOne({ where: { id: eventId } });
        const ticketCount = await this.ticketsRepo.count({ where: { event: { id: eventId } } });
        const revenue = await this.ticketsRepo
            .createQueryBuilder('ticket')
            .select('SUM(ticket.price)', 'sum')
            .where('ticket.eventId = :eventId', { eventId })
            .getRawOne();
        return {
            event,
            totalTickets: ticketCount,
            totalRevenue: Number(revenue?.sum ?? 0),
        };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(1, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReportsService);
//# sourceMappingURL=reports.service.js.map