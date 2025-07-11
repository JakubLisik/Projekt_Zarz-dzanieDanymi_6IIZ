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
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
const event_entity_1 = require("../events/event.entity");
let TicketsService = class TicketsService {
    ticketsRepo;
    eventsRepo;
    constructor(ticketsRepo, eventsRepo) {
        this.ticketsRepo = ticketsRepo;
        this.eventsRepo = eventsRepo;
    }
    async create(dto) {
        const event = await this.eventsRepo.findOneByOrFail({ id: dto.eventId });
        const ticket = this.ticketsRepo.create({ ...dto, price: +dto.price, event });
        return this.ticketsRepo.save(ticket);
    }
    findAll() {
        return this.ticketsRepo.find();
    }
    findOne(id) {
        return this.ticketsRepo.findOne({ where: { id } });
    }
    async update(id, dto) {
        await this.ticketsRepo.update(id, { ...dto, price: dto.price !== undefined ? +dto.price : undefined });
        return this.findOne(id);
    }
    remove(id) {
        return this.ticketsRepo.delete(id);
    }
};
exports.TicketsService = TicketsService;
exports.TicketsService = TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TicketsService);
//# sourceMappingURL=tickets.service.js.map