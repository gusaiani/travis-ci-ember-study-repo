import Ember from 'ember';
import FaviconManager from 'travis/utils/favicon-manager';

var fakeHead, manager;

module('Favicon manager', {
  beforeEach() {
    fakeHead = Ember.$('<div id="fake-head"></div>').appendTo(Ember.$('#qunit-fixture'));
    return manager = new FaviconManager(fakeHead[0]);
  },
  afterEach() {
    fakeHead.remove();
    return manager = null;
  }
});
