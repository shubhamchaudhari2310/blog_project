const mongoose = require("mongoose")
require("colors")

const db = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB CONNECTED ".bgGreen.black);
    } catch (error) {
        console.log(`DB CONNECTION ERROR ${error}`.bgGreen.black);
        process.exit()

    }
}

module.exports = db