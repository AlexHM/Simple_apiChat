export default {
  DB: {
    URL_MONGO:
      process.env.MONGODB_URL ||
      "mongodb+srv://adat:1234@cluster0.wkrf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    USER_MONGO: process.env.MONGODB_USER || "",
    PASSWORD_MONGO: process.env.MONGODB_PASS || "",
  },
};
