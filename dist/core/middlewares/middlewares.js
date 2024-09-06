"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const customErrors_1 = require("../errors/customErrors");
const errorMiddleware = (err, req, res, next) => {
    if (err instanceof customErrors_1.NotFoundError) {
        return res.status(404).json({ error: err.message });
    }
    if (err instanceof customErrors_1.ValidationError) {
        return res.status(400).json({ error: err.message });
    }
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
};
exports.errorMiddleware = errorMiddleware;
