import Ember from 'ember';
import Repo from 'travis/models/repo';
import { task, timeout } from 'ember-concurrency';
import Visibility from 'npm:visibilityjs';

const { service, controller } = Ember.inject;
const { alias } = Ember.computed;

var sortCallback = function (repo1, repo2) {
  // this function could be made simpler, but I think it's clearer this way
  // what're we really trying to achieve

  var buildId1 = repo1.get('currentBuild.id');
  var buildId2 = repo2.get('currentBuild.id');
  var finishedAt1 = repo1.get('currentBuild.finishedAt');
  var finishedAt2 = repo2.get('currentBuild.finishedAt');

  if (!buildId1 && !buildId2) {
    // if both repos lack builds, put newer repo first
    return repo1.get('id') > repo2.get('id') ? -1
  } else if (buildId1 && !buildId2) {
    // if only repo1 has a build, it goes first
    return -1;
  } else if (buildId2 && !buildId1) {
    // if only repo2 has a build, it goes first
    return 1;
  }

  if (finishedAt1) {
    finishedAt1 = new Date(finishedAt1);
  }
  if (finishedAt2) {
    finishedAt2 = new Date(finishedAt2);
  }
}
