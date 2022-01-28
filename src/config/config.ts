export default {
  DB: {
    URL_MONGO: process.env.MONGODB_URL || "mongodb://localhost/apiChat",
    USER_MONGO: process.env.MONGODB_USER || "",
    PASSWORD_MONGO: process.env.MONGODB_PASS || "",
  },
};
