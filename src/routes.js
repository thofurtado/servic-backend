const express = require('express');

const routes = express.Router();

const ServiceController = require('./controllers/ServiceController');

routes.get("/services", ServiceController.index);
routes.get("/services/:id", ServiceController.show);
routes.put("/services/:id", ServiceController.update);
routes.delete("/services/:id", ServiceController.delete);
routes.post("/services", ServiceController.store);


module.exports = routes; 
