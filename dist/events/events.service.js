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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("./event.entity");
const venue_entity_1 = require("../venues/venue.entity");
let EventsService = class EventsService {
    eventsRepo;
    venuesRepo;
    constructor(eventsRepo, venuesRepo) {
        this.eventsRepo = eventsRepo;
        this.venuesRepo = venuesRepo;
    }
    async create(dto) {
        const venue = await this.venuesRepo.findOneByOrFail({ id: dto.venueId });
        const event = this.eventsRepo.create({ ...dto, venue });
        return this.eventsRepo.save(event);
    }
    findAll() {
        return this.eventsRepo.find();
    }
    findOne(id) {
        return this.eventsRepo.findOne({ where: { id } });
    }
    async update(id, dto) {
        await this.eventsRepo.update(id, dto);
        return this.findOne(id);
    }
    remove(id) {
        return this.eventsRepo.delete(id);
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(1, (0, typeorm_1.InjectRepository)(venue_entity_1.Venue)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EventsService);
//# sourceMappingURL=events.service.js.map