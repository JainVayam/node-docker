const config = {
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASS,
  MONGO_IP: process.env.MONGO_IP || 'mongo-db',
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_DB: process.env.MONGO_DB || 27017,
  REDIS_URL: process.env.REDIS_URL || 'redis-db',
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  SESSION_SECRET: process.env.SESSION_SECRET
}

export default config