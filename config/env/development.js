'use strict';

module.exports = {
  db: 'mongodb://heroku_wlscsshg:mohamad@ds035633.mongolab.com:35633/heroku_wlscsshg',
  debug: true,
  logging: {
    format: 'tiny'
  },
  //  aggregate: 'whatever that is not false, because boolean false value turns aggregation off', //false
  aggregate: false,
  mongoose: {
    debug: false
  },
  hostname: 'http://localhost:3000',
  app: {
    name: 'MEAN - A Modern Stack - Development'
  },
  strategies: {
    local: {
      enabled: true
    },
    landingPage: '/',
    facebook: {
      clientID: '1515480425389476',
      clientSecret: 'c2ad33ef0234fd61f33165bdb6c4303f',
      callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
      enabled: false
    },
    twitter: {
      clientID: 'DEFAULT_CONSUMER_KEY',
      clientSecret: 'CONSUMER_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
      enabled: false
    },
    github: {
      clientID: 'DEFAULT_APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/github/callback',
      enabled: false
    },
    google: {
      clientID: 'DEFAULT_APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
      enabled: false
    },
    linkedin: {
      clientID: 'DEFAULT_API_KEY',
      clientSecret: 'SECRET_KEY',
      callbackURL: 'http://localhost:3000/api/auth/linkedin/callback',
      enabled: false
    }
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER', // Gmail, SMTP
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  }, 
  secret: 'SOME_TOKEN_SECRET'
};
