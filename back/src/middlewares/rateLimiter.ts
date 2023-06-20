import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 4,
    message: "Too many attempts from this IP, try again later",
    standardHeaders: true
});