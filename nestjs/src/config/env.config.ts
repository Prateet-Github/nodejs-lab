export default () => ({
  app: {
    port: parseInt(process.env.PORT!, 10),
    env: process.env.NODE_ENV,
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
});