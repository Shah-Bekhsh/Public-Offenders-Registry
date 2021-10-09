const routes = require("next-routes")();

routes
  .add("/offenders/offenders/createinstance", "/offenders/createinstance")
  .add("/offenders/createinstance", "/offenders/createinstance")
  .add("/offenders/addinformation", "/offenders/addinformation")
  .add("/offenders/:address", "/offenders/show");

module.exports = routes;
