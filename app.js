require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');
const { userRouter, productRouter } = require('./routes');
const { errorMiddleWare } = require('./middleware/errorMiddleware');
const connectDB = require('./db/connect');
const { connectRedis } = require('./redis');
require('express-async-errors');

const app = express();

// router 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// socket io 
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST']
  }
});


app.get('/', (req, res) => {
  res.send('<h1>HI from api</h1>')
})

app.use('/api/v1/ecommerce/users', userRouter);
app.use('/api/v1/ecommerce/products', productRouter);
app.use(errorMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await connectRedis();

    app.listen(process.env.PORT, () => {
      console.log("Server is listening on " + process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
