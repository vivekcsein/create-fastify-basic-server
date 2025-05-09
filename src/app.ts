// import cors from "cors";
import { envConfig } from "./configs/constants/env.config";

// Import the framework and instantiate it
import Fastify from "fastify";

//Import all typescript instances
import type { FastifyInstance } from "fastify";

//Import all the plugins for fastify

//Import all the Routes files
import userRoutes from "./api/v1/users/users.routes";

//Initialize Fastify app
const app: FastifyInstance = Fastify({
    logger: true,
});

//Config Server Port to be use, so make sure setup SERVER_PORT in env file
if (!envConfig.SERVER_PORT) {
    process.exit(1);
}
const PORT: number = envConfig.SERVER_PORT;

//Setup API path for the safety of the api
if (!envConfig.API_PATH) {
    process.exit(1);
}

//register database plugin

// Register homepage app route
app.get("/", async function handler(request, reply) {
    return "Server is fast with fastify";
});

// Register User Api: {website}/api/v1/user/
userRoutes.forEach(route => {
    app.register(
        (app, _, done) => {
            app.route(route);
            done();
        }, { prefix: `${envConfig.API_PATH}/v1/user` }
    );
});

//not found page app route
app.get("/*", (req, reply) => {
    req ? "" : "";
    reply.status(404).send("Error 404, URL not found");
});

// start server
const startserver = async () => {
    try {
        await new Promise((resolve) => {
            app.listen({ port: PORT }, () => {
                console.log(`Server running on http://localhost:${PORT}`);
                resolve("server started");
            });
        });
    } catch (err) {
        app.log.error(err);
        console.error("Server can not start: ", err);
        process.exit(1);
    }
};

startserver();
