const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
import mongoose from 'mongoose'
import User from '../models/user'

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then((user => {
        done(null, user)
    }))    
})
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done)=> {
    User.findOne({googleId: profile.id}, (err, user)=> {
        if (!user) {
            const newUser = new User({googleId: profile.id})
            newUser.save((err,doneUser)=> done(null,doneUser))
        } else {
            done(null, user)
        }
    })
    
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
    
}))