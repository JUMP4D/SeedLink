import { Server } from 'bittorrent-tracker'; // attention: avec "type": "module" dans package.json

const server = new Server({
  udp: true,
  http: true,
  ws: true,
  stats: true
});

server.on('error', err => {
  console.error('Erreur du tracker :', err.message);
});

server.on('warning', err => {
  console.warn('Avertissement :', err.message);
});

server.on('listening', () => {
  const httpAddr = server.http.address();
  const udpAddr = server.udp.address();
  const wsAddr = server.ws.address();

  console.log(`Tracker HTTP : http://${httpAddr.address}:${httpAddr.port}/announce`);
  console.log(`Tracker UDP  : udp://${udpAddr.address}:${udpAddr.port}`);
  console.log(`Tracker WS   : ws://${wsAddr.address}:${wsAddr.port}`);
});

server.listen(8000); // Port configurable
