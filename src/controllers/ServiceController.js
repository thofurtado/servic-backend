const mongoose = require('mongoose');
const Service = mongoose.model('Service');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query; //Parametro page que esta no GET, esta sendo usado na proxima linha
        const services = await Service.paginate({}, {page, limit: 10});
        return res.json(services);
    },
    async show(req, res){
        const services = await Service.findById(req.params.id);

        return res.json(services);
    },
    async update(req, res){
        const services = await Service.findByIdAndUpdate(req.params.id,req.body, { new: true });
        
        return res.json(services);
    },
    async delete(req, res){
        await Service.findByIdAndRemove(req.params.id);
        
        return res.send();
    },
    async store(req, res) {
        const services = await Service.create(req.body);
        return res.json('services');
    }
};