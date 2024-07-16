"use strict";
// Discuss the difference between default and named 
// exports in JavaScript modules.
// In default modules only one default can be use in one file.
// It is designed to export one main functionality or value
//  from the module.
// Export named modules can be more than one.
Object.defineProperty(exports, "__esModule", { value: true });
exports.askName = void 0;
function logMessage(message) {
    return message;
}
exports.default = logMessage;
exports.askName = "Would you like to tell your name?";
