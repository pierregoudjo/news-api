
const VARS = [
  'NODE_ENV',
  'MYSQL_DSN',
  'LOG_LEVEL',
  'PORT'
];

module.exports = VARS.reduce(function(obj, key) {
  obj[key] = process.env[key];
  return obj;
}, {
  // defaults
  NODE_ENV: 'development',
  LOG_LEVEL: 'info',
  PORT: 3000
});
