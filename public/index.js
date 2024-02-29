const axios = require('axios');

// const blogButtonSelected = document.querySelector("#blog")

const baseURL = `http://localhost:4000/`

const getInfo = () => axios.post(`${baseURL}get`).then(res => {

    res.status(200).send('Response from index.js')

}).catch(err => {
    rollbar.error("It didn't work!!!")

})

module.exports = {
    getInfo: getInfo
}

document.querySelector("#blog").addEventListener('click', getInfo)