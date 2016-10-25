/* global Travis, _cio, HS */
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import initHsBeacon from 'travils/utils/init-hs-beacon';

Ember.MODEL_FACTORY_INJECTIONS = true;

// This can be set per environment in config/environment.js
var debuggingEnabled = config.featureFlags['debug-logging'];
var proVersion = config.featureFlags['pro-version'];

var App = Ember.Application.extend(Ember.Evented, {
  modulePrefix: config.modulePrefix,
})
