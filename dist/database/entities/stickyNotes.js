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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stickynotes = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const uuid_1 = require("uuid");
let Stickynotes = class Stickynotes extends typeorm_1.BaseEntity {
    beforeInsert() {
        this.uid_msg = (0, uuid_1.v4)();
        this.createdAt = new Date();
    }
    beforeUpdate() {
        this.updatedAt = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Stickynotes.prototype, "uid_msg", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "title" }),
    __metadata("design:type", String)
], Stickynotes.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "description" }),
    __metadata("design:type", String)
], Stickynotes.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "created_at" }),
    __metadata("design:type", Date)
], Stickynotes.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Stickynotes.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.Users),
    (0, typeorm_1.JoinColumn)({ name: "uid_user" }),
    __metadata("design:type", String)
], Stickynotes.prototype, "uidUser", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Stickynotes.prototype, "beforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Stickynotes.prototype, "beforeUpdate", null);
Stickynotes = __decorate([
    (0, typeorm_1.Entity)({ name: "stickynotes" })
], Stickynotes);
exports.Stickynotes = Stickynotes;
