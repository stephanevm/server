require('babel-register');
const server = require('./server')({
    max_tcp_sockets: 10,
    secure:  false
});

server.listen(1234, () => {
});
