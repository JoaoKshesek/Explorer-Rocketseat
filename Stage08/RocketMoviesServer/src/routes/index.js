const { Router } = require("express");

const usersRouter = require("./user.routes");
const movieNotesRoutes = require("./movieNotes.routes");
const movieTagsRouter = require("./movieTags.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", movieNotesRoutes);
routes.use("/tags", movieTagsRouter);

module.exports = routes;
