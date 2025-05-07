"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const saborSchema = new Schema({
    sabor: {
        type: String,
        required: [true, 'sabor required'],
        unique: true
    }
});
const sabor = mongoose.model("sabor", saborSchema);
exports.default = sabor;
//# sourceMappingURL=sabor.model.js.map