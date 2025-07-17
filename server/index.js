const express = require('express');
const logger = require('./middleware/logger');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const app = express();

app.use(cors())

// Initialize the middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/phrases', require('./routes/api/phrases'));
app.use('/api/alphabet', require('./routes/api/alphabet'));
app.use('/api/difficulties', require('./routes/api/difficulties'));
app.use('/api/countries', require('./routes/api/countries'));

const userRouter = require('./routes/users');
app.use('/users', userRouter);


// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('MongoDB connection error:', error));

const PORT = 3500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));