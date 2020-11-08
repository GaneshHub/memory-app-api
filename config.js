const config = {
    local : {
        MONGO_DB_CONNECTION_URL: "mongodb://localhost:27017/test"
    },
    prod : {
        MONGO_DB_CONNECTION_URL: "mongodb+srv://GaneshBandreddy:Ganesh@6666@cluster0.ktgrt.mongodb.net/test?retryWrites=true&w=majority"
    }
}

export default config;