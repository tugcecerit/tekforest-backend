const express = require('express')
import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
const bcrypt = require('bcrypt')
const db = require('../models')

const register = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    console.log(req)
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    db.User.findOne({username: req.body.username}, (err, userExists))
        .then((createdUser)=> {
            req.session.currentUser = createdUser
            if(userExists){
                res.status(404).json({message: 'Username already taken'})
            } else {
                res.status(200).json({data: createdUser})
            }
        })
    }

const signIn = (req, res) => {
    db.User.findOne({username: req.body.username}, (err, foundUser))
    .then((foundUser) => {
        const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
        if(validLogin){
            req.session.currentUser = foundUser
            res.status(201).json({data: foundUser, message: 'You are signed in'})
        } else {
            res.status(400).json({message: 'Wrong username or password'})
        }
    })
}

const signOut = (req, res) => {
    db.User.findOne({username: req.body.username})
    .then(() => {
        req.session.destroy()
    })
}


module.exports = {
    register,
    signIn,
    signOut,
}