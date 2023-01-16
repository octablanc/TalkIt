const app = require('express')();
const cors = require('cors');
const server = require('http').createServer(app);
const {Server} = require('socket.io');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const { CLIENT_URL, PORT } = process.env;

app.use(cors());
app.use(morgan('dev'));

const io = new Server(server, {
    cors: {
        origin: CLIENT_URL,
        methods: ['GET', 'POST']
    }
});

server.listen(PORT, ()=> {
    console.log('Server listen on port: ' + PORT);
})