const { Books } = require('./api');

var routes = [
    {
        method: 'GET',
        path: '/api/books',
        config: Books.GetBooks
    },

    {
        method: 'POST',
        path: '/api/books',
        config: Books.AddBook
    }
];

module.exports = routes;