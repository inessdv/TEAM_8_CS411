const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Cluster31684:mongodb+srv://Cluster31684:K6LcEN8dcZT2meYz@cluster31684.cray19r.mongodb.net/@cluster31684.cray19r.mongodb.net/?retryWrites=true&w=majority";

const app = express();

// Initialize MongoDB connection
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db('myapp');

  // Initialize Google Sign-In
  passport.use(new GoogleStrategy({
    clientID: "44906587167-mq3o0850m82thd3k1l7p89h56sca7rv0.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:27017/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Check if user exists in MongoDB
    db.collection('users').findOne({ googleId: profile.id }, (err, user) => {
      if (err) { return cb(err); }
      if (user) {
        return cb(null, user);
      } else {
        // Create new user in MongoDB
        const newUser = {
          googleId: profile.id,
          name: profile.displayName
        };
        db.collection('users').insertOne(newUser, (err, result) => {
          if (err) { return cb(err); }
          return cb(null, newUser);
        });
      }
    });
  }
  ));

  passport.serializeUser((user, cb) => {
    cb(null, user.googleId);
  });

  passport.deserializeUser((id, cb) => {
    db.collection('users').findOne({ googleId: id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

  // Set up Express.js middleware
  app.use(express.static('public'));
  app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Set up Google Sign-In routes
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Set up Express.js routes
  app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      res.send(`Hello, ${req.user.name}! <a href="/logout">Log out</a>`);
    } else {
      res.send(`<a href="/auth/google">Log in with Google</a>`);
    }
  });

  // Start the server
  app.listen(4000, () => {
    console.log('Server listening on port 27017');
  });
});