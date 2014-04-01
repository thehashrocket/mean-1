'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Property = mongoose.model('Property'),
    _ = require('lodash');

/**
 * Create a article
 */
exports.create = function(req, res) {
    var property = new Property(req.body);
    property.user = req.user;

    property.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                property: property
            });
        } else {
            res.jsonp(property);
        }
    });
};

/**
 * Show the current article
 */
exports.read = function(req, res) {
    res.jsonp(req.property);
};

/**
 * Update a article
 */
exports.update = function(req, res) {
    var property = req.property;

    property = _.extend(property, req.body);

    property.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(property);
        }
    });
};

/**
 * Delete an article
 */
exports.delete = function(req, res) {
    var property = req.property;

    property.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(property);
        }
    });
};

/**
 * List of Articles
 */
exports.list = function(req, res) {
    Property.find().sort('-created').populate('user', 'displayName').exec(function(err, properties) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(properties);
        }
    });
};

/**
 * Article middleware
 */
exports.propertyByID = function(req, res, next, id) {
    Property.load(id, function(err, property) {
        if (err) return next(err);
        if (!property) return next(new Error('Failed to load property ' + id));
        req.property = property;
        next();
    });
};

/**
 * Article authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.property.user.id !== req.user.id) {
        return res.send(403, 'User is not authorized');
    }
    next();
};