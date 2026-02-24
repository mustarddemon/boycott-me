import type { Server } from "http";
import express from "express";
import { getStatus } from "./endpoints/getStatus";

export const setupServer = (port: number): Server => {
    const expressApp = express();

    expressApp.get("/api/v1/status", getStatus);

    return expressApp.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}