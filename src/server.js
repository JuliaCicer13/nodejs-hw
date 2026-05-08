import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

// pars json

app.use(express.json());


app.post('/users', (req, res) => {
    console.log(req.body);
    res.status(201).json({message : 'User created' })
})
// login time

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

// path

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World'});
});

// Маршрут для тестування middleware помилки

app.get('/test-error', (req, res) => {
   // Штучна помилка для прикладу
   throw new Error('Something wetn wrong');
});

// Middleware 404 (після всіх маршрутів)

app.use((req,res) => {
  res.status(404).json({message:'Route not found' });
});

// Middleware для обробки помилок

app.use((err, req, res, next) => {
  console.error('Error:', err.message);

  const isProd = process.env.NODE_ENV === "production";

  res.status(500).json({
    message: isProd
    ?"Something went wrong. Please try again later."
    : err.message,
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



