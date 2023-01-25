require("dotenv").config();

const dev = {

    app: {
        port: process.env.PORT || 4000
    },
    db: {
        url: "mongodb+srv://masure22:atlasnowthismoment@cluster0.sarrc.mongodb.net/userDemoDb" || "mongodb://localhost:27017/userDemoDb"
    }
}

module.exports = dev;
