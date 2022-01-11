"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (date) => {
    const dateString = date
        .split('/')
        .map(value => {
        return Number(value);
    });
    return new Date(dateString[2], dateString[1] - 1, dateString[0]);
};
exports.dateStringToDate = dateStringToDate;
