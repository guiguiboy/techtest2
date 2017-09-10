/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        order: {
            type: 'integer'
        },
        difficulty: {
            type: 'integer'
        },
        category: {
            model: 'category'
        },
        answers: {
            collection: 'answer',
            via: 'question'
        }
    }
};

