import Hapi from '@hapi/hapi';
import routes from './routes';
import * as admin from 'firebase-admin'


var serviceAccount = require(".././firebase-admin-credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['http://localhost:4200'], // allow Angular
                credentials: false // true only if you use cookies/auth sessions
            }
        }
    });

    routes.forEach(route => server.route(route));

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await server.stop({ timeout: 10000 });
    console.log('Server stopped');
    process.exit(0);
});

start();