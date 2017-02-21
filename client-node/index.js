var net = require('net')

client = new net.Socket();
client.connect(5561,'192.168.1.114',function(){
console.log('connected');
client.write('GET');
});

client.on('data',function(data){
console.log('Received: '+data);
client.destroy();
});
