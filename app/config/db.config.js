export default {
    url: process.env.DATABASE_URI || "mongodb://127.0.0.1:3000/golestan_db",
    option: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};
