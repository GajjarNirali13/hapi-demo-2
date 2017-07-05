const Boom = require('boom');
const Book = require('../../models/books');

module.exports = {
	handler: (request, reply) => {
	    Book.find((err, docs) => {
            if (err) {
                return reply(Boom.wrap(err, 'Internal MongoDB error'));
            }
            reply(docs);
        });
	}
}