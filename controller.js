console.log("controller.js is running")

module.exports = {
    getInfo: (rec, res) => {
        res.status(200).send('Response from index.js')
    }
}