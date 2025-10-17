const express = require("express");
const morgan = require("morgan");
const apiRoutes = require("./routes");
const { Limiter } = require("./utils/common");

const { ServerConfig, Logger, QueueConfig } = require("./config");

const app = express();

app.use([
    morgan("dev"),
    express.json(),
    express.urlencoded({ extended: true }),
    Limiter
]);

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`server is running on ${ServerConfig.PORT}`);
    await QueueConfig.connectQueue();

    // Logger.log({
    //     label: 'root-file: index.js',
    //     level: 'info',
    //     message: `server is running on ${ServerConfig.PORT}`,
    // });
    // Logger.info({
    //     label: 'root-file: index.js',
    //     message: `server is running on ${ServerConfig.PORT}`,
    // })

})