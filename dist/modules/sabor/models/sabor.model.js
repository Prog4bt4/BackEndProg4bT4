"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SaborSchema = new Schema({
    sabor: {
        type: String,
        required: [true, 'sabor required'],
        unique: true
    }
});
const Sabor = mongoose.model("Sabor", SaborSchema);
exports.default = Sabor;
//# sourceMappingURL=sabor.model.js.map