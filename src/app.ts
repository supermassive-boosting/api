import process from 'node:process';
import server from './server.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
