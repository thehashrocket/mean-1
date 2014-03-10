'use strict';

module.exports = {
	db: 'mongodb://localhost/mean-dev',
	app: {
		title: 'Real Estate Community App'
	},
    facebook: {
        clientID: '408616955926361',
        clientSecret: 'c8e02eb82d05f9475676b47bb8c8ca89',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
	twitter: {
		clientID: 'CONSUMER_KEY',
		clientSecret: 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: '196438243219-borpoe3i3irm94fokv9esg4h1vjs9n4q.apps.googleusercontent.com',
		clientSecret: 'q2u7YJevQMFt-VOZahjwI5rv',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};