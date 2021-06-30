const config = {
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASS,
  MONGO_IP: process.env.MONGO_IP || 'mongo-db',
  MONGO_PORT: process.env.MONGO_PORT || 27017, 
}

export default config