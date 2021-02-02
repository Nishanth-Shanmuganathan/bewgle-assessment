exports.processController = (req, res) => {
    const duration = Math.floor(Math.random() * (31 - 15)) + 15 //Math.random() * (max - min) + min
    const data = {
        date: new Date().toISOString(),
        method: req.method,
        headers: req.headers,
        path: req.baseUrl + req.path,
        query: req.query,
        body: req.body,
        duration
    }
    setTimeout(() => {
        return res.send(data)
    }, duration * 1000)
}