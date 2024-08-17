import process from 'node:process';
import server from './server.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  /* eslint-disable-next-line no-undef, no-console */
  console.log(`API is running on port ${PORT}`);
});
