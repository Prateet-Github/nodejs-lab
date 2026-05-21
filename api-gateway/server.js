import express from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware';

const app = express();
const PORT = 3000;

// Proxy requests to the auth service
app.use("/auth", createProxyMiddleware({
  target: "http://localhost:3001", 
  changeOrigin: true
}));

app.use("/users", createProxyMiddleware({
  target: "http://localhost:3002", 
  changeOrigin: true
}));

app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});