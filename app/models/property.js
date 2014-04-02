'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

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