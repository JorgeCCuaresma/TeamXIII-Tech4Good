import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();


//ROUTES
import authRoutes from "../routes/auth.routes";
import errorRoutes from "../routes/error404.routes";

//DB CONNECTION
import mongoConnect from "../db/db.config";
import seeder from "../db/seed";

class Server {
    private app: Application;
    private port: string;
    private path = {
        auth: "/api/auth",
        users: "/api/users",
        docs: "/api-docs",
        error: "/"
    };

    constructor() {

        this.app = express();
        this.port = process.env.PORT || "8080";

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await mongoConnect();
        await seeder();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(helmet());
    }

    routes() {
        this.app.use(this.path.auth, authRoutes);
        this.app.use(this.path.error, errorRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port", this.port);
        });
    }
}

export default Server;