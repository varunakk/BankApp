const  createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware("/loan/*", { target: "http://localhost:5000" }));
  app.use(createProxyMiddleware("/users/*", { target: "https://iiitsbank.herokuapp.com:5000/users/" }));
  app.use(createProxyMiddleware("/req/*", { target: "https://localhost:5000" })); 
  app.use(createProxyMiddleware("/transactions/*", { target: "http://localhost:5000" })); 
 
};
