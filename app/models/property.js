'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


/**
 * Tickets Schema
 */

var Tickets = new Schema({
    ticketName: {
        type: String,
        default: '',
        trim: true
    },
    ticketDescription: {
        type: String,
        default: '',
        trim: true
    },
    ticketDate: {
        type: Date,
        default: Date.now
    }
});

/**

 * Property Schema
 */
var PropertySchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
    userID: {
        type: String,
        default: '',
        trim: true
    },
    businessName: {
        type: String,
        default: '',
        trim: true
    },
    streetAddress: {
        type: String,
        default: '',
        trim: true
    },
    city: {
        type: String,
        default: '',
        trim: true
    },
    state: {
        type: String,
        default: '',
        trim: true
    },
    zip: {
        type: String,
        default: '',
        trim: true
    },
    units: {
        type: String,
        default: '',
        trim: true
    },
    tickets: [Tickets],
	content: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

/**
 * Validations
 */

/**
 * Statics
 */
PropertySchema.statics = {
	load: function(id, cb) {
		this.findOne({
			_id: id
		}).populate('user', 'displayName').exec(cb);
	}
};

mongoose.model('Property', PropertySchema);