"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studente = void 0;
var person_1 = require("./person");
// herança
var Studente = /** @class */ (function (_super) {
    __extends(Studente, _super);
    function Studente(name) {
        return _super.call(this, name) || this;
    }
    //sobrescrita de método
    Studente.prototype.showIdade = function (idade) {
        console.log('Estudando');
        _super.prototype.showIdade.call(this, 25);
    };
    return Studente;
}(person_1.Person));
exports.Studente = Studente;
//# sourceMappingURL=student.js.map