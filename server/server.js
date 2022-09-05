const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

let dbUri;

if (process.env.NODE_ENV === 'development')
  dbUri = process.env.TEST_DB.replace('PASSWORD', process.env.DB_PASSWORD);
else if (process.env.NODE_ENV === 'production')
  dbUri = process.env.DB.replace('PASSWORD', process.env.DB_PASSWORD);

const port = process.env.PORT || 8000;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
}).then(() => console.log('Connected to database'));

app.listen(port, () => console.log(`Server running on port ${port}`));
