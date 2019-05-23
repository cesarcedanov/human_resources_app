const app = require('./server/server');

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log('Listening');
});