const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ServiceSchema = new mongoose.Schema({
     summary: {
         type: String,
         required: true, 
     },
     description: {
        type: String,
        required: true, 
    },
    client: {
        type: String,
        required: true, 
    },
    equipment: {
        type: String,    
    },
    place: {
        type: String,
         
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
    prevision: {
        type: Date,
        default: Date.now, 
        
    }
});
ServiceSchema.plugin(mongoosePaginate);
mongoose.model('Service', ServiceSchema);    