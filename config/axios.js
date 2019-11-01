const axios = require('axios')

const axiosLovePercent = axios.create({
    baseURL: `https://love-calculator.p.rapidapi.com/getPercentage`,
    headers: {
        "X-RapidAPI-Key": "6f143477c1msha429b417057c1fbp13ae09jsn86c3718dc162",
        "X-RapidAPI-Host": `${process.env.LOVE_HOST}`
    }
})

const axiosSimsimi = axios.create({
    baseURL: `https://wsapi.simsimi.com/190410/talk`,
    headers: {
        "x-api-key": "5Qq07p97A0uDzxw5Nfi6Vj0CnIfuzWHS/MEJPnRj",
        "Content-Type": "application/json"
    }  
})

const axiosRandom = axios.create({
    baseURL: `https://randomuser.me/api/?gender=`
})


module.exports = {
    axiosLovePercent,
    axiosRandom,
    axiosSimsimi
}
