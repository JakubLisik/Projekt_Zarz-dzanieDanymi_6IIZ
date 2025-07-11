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
exports.AttendeesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const attendees_service_1 = require("./attendees.service");
const create_attendee_dto_1 = require("./dto/create-attendee.dto");
const update_attendee_dto_1 = require("./dto/update-attendee.dto");
let AttendeesController = class AttendeesController {
    attendeesService;
    constructor(attendeesService) {
        this.attendeesService = attendeesService;
    }
    create(dto) {
        return this.attendeesService.create(dto);
    }
    findAll() {
        return this.attendeesService.findAll();
    }
    findOne(id) {
        return this.attendeesService.findOne(id);
    }
    update(id, dto) {
        return this.attendeesService.update(id, dto);
    }
    remove(id) {
        return this.attendeesService.remove(id);
    }
};
exports.AttendeesController = AttendeesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attendee_dto_1.CreateAttendeeDto]),
    __metadata("design:returntype", void 0)
], AttendeesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendeesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendeesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attendee_dto_1.UpdateAttendeeDto]),
    __metadata("design:returntype", void 0)
], AttendeesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttendeesController.prototype, "remove", null);
exports.AttendeesController = AttendeesController = __decorate([
    (0, swagger_1.ApiTags)('attendees'),
    (0, common_1.Controller)('attendees'),
    __metadata("design:paramtypes", [attendees_service_1.AttendeesService])
], AttendeesController);
//# sourceMappingURL=attendees.controller.js.map