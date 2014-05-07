'use strict';

module.exports = {
	db: 'mongodb://localhost/mean-dev',
	app: {
		title: 'MEAN.JS - Development Environment'
	},
    facebook: {
        clientID: '408616955926361',
        clientSecret: 'c8e02eb82d05f9475676b47bb8c8ca89',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: '196438243219-borpoe3i3irm94fokv9esg4h1vjs9n4q.apps.googleusercontent.com',
		clientSecret: 'q2u7YJevQMFt-VOZahjwI5rv',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
