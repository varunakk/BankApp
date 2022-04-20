const  createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware("/loan/*", { target: "http://localhost:5000" }));
  app.use(createProxyMiddleware("/users/*", { target: "http://localhost:5000" }));
  app.use(createProxyMiddleware("/req/*", { target: "http://localhost:5000" })); 
  app.use(createProxyMiddleware("/transactions/*", { target: "http://localhost:5000" })); 

  
};
