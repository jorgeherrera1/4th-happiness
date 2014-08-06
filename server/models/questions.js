'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Questions Schema
 */
var QuestionsSchema = new Schema({
    howHappyAreYouInYourTeam: {
        type: Number,
        default: 1,
        min: 1,
        max: 10,
        required: true
    },
    howHappyAreYouWithTheCompany: {
        type: Number,
        default: 1,
        min: 1,
        max: 10,
        required: true
    },
    whatMakesYouFeelBest: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    whatMakesYouFeelWorst: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    whatWouldIncreaseYourHappiness: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    dateEntered: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('HappinessQuestions', QuestionsSchema);