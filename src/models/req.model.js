const mongoose = require('mongoose')

//date,method,path will be of datatype string => type:String
//duration will be of datatype number => type: Number

//query, headers, body will have objects as their value => type: Map

//Especially query and headers will have its keys and values as strings => of: String
// but body will have strings/ numbers/ nested objects as their value

const reqSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    body: {
        type: Map,
        default: {}
    },
    query: {
        type: Map,
        of: String,
        default: {}
    },
    headers: {
        type: Map,
        of: String,
        required: true
    }
})

reqSchema.methods.toJSON = function () {
    const reqObject = this['_doc']
    delete reqObject['_id']
    delete reqObject['__v']
    return reqObject
}

module.exports = mongoose.model('Request', reqSchema)