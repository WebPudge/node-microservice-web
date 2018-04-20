const http = require('http');
const ip = require('ip');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`remoteIP:${getClientIp(req)},localhost:${ip.address()}`);
});
server.listen(3000, '0.0.0.0', () => {
    console.log(`Server running at 3000 `);
});
function getClientIp(req) {
    let ip = req.headers['x-forwarded-for'] || req.ip ||req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress || '';
    if (ip.split(',').length > 0) {
        ip = ip.split(',')[0]
    }
    return ip;
};