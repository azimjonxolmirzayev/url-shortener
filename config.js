require("dotenv").config();

module.exports = {
  postgresConfig: {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT, 10),
  },
  redisConfig: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10),
  },
  corsOptions: {
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHODS.split(","),
    credentials: process.env.CORS_CREDENTIALS === "true",
  },
};
