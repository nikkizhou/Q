import "dotenv/config"
import cors from "cors"
import path from "path"
import express from "express"
import { fileURLToPath } from 'url';
import router from './routes/index.js';

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api', router);

// Serve the Front End
if (process.env.NODE_ENV == 'production') {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.use(express.static(path.join(__dirname, "static")));
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'static', 'index.html'));
  });
}

// Serve the server
app.listen(PORT, () => {
  console.log('Listening to ' + PORT)
})
