const Request = require('./../models/req.model')

exports.processController = async (req, res) => {
    const duration = Math.floor(Math.random() * (31 - 15)) + 15 //Math.random() * (max - min) + min
    const request = new Request({
        date: new Date().toISOString(),
        method: req.method,
        headers: req.headers,
        path: req.baseUrl + req.path,
        query: req.query,
        body: req.body,
        duration
    })
    try {
        await request.save()
        setTimeout(() => {
            return res.send(request)
        }, duration) // altered for testing purpose
        // }, duration * 1000) // original condition
    } catch (error) {
        res.send(error)
    }
}