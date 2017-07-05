const Boom = require('boom');
const Joi = require('joi');
const Book = require('../../models/books');

module.exports = {
	validate: {
		payload: {
            name: Joi.string().min(5).max(50).required(),
            author: Joi.string().min(5).max(50).required()
        }
	},
	handler: (request, reply) => {
	    const book = new Book({
            name: request.payload.name,
            author: request.payload.author
        });
        book.save(book, (err, result) => {

            if (err) {
                return reply(Boom.wrap(err, 'Internal MongoDB error'));
            }
            reply(book);
        });
	}
}