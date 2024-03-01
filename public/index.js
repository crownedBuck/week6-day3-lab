console.log("index.js is running")
const aboutButtonSelected = document.querySelector("#about")

const baseURL = `http://localhost:4000/`

// var Rollbar = require('rollbar')
// var rollbar = new Rollbar({
//   accessToken: '32774ee7a22f4966b2ad52eeb3d7ae0d',
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })

const getInfo = () => axios.post(`${baseURL}get`).then(res => {
    try {
        nonExistentFunction();
      } catch (error) {
        rollbar.error(`It didn't work!!! ${error}`)
      }
      

})

aboutButtonSelected.addEventListener('click', getInfo)
