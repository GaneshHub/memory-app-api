const config = {
    local : {
        MONGO_DB_CONNECTION_URL: "mongodb://localhost:27017/test"
    },
    prod : {
        MONGO_DB_CONNECTION_URL: `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ktgrt.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
    }
}

export default config;