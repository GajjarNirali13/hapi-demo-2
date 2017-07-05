const Hapi = require('hapi');
const routes = require('./route');

const server = new Hapi.Server();
server.connection({port: 3000, host: 'localhost'});

const plugins = [
	{
        register: require('inert')
    },
    {
        register: require('./hapi-mongoose'),
        options: {
            connection: 'hapi-db',
            schemas: {
                Book: './models/books'
            }
        }
    }    
];

server.register(plugins, (err) => {
    if (err) {
        return console.error('Failed to load a plugin:', err);
    }
});

server.route(routes);

server.start(() => {

    console.log('Server started ', server.info.uri);
});

module.exports = server;
