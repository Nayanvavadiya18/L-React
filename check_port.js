const net = require('net');

const client = new net.Socket();
console.log("Attempting to connect to port 5000...");
client.connect(5000, '127.0.0.1', function () {
    console.log('✅ Connected to port 5000 - Server is running');
    client.destroy();
});

client.on('error', function (err) {
    console.log('❌ Connection failed: ' + err.message);
    console.log("This means likely nothing is listening on port 5000.");
});
