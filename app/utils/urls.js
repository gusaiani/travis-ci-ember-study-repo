/* global Travis, md5 */
import config from 'travis/config/environment';

var ccXml, email, githubAdmin, githubCommit, githubNetwork, githubPullRequest,
  githubRepo, githubWatchers, gravatarImage, plainTextLog, statusImage;

plainTextLog = function (id) {
  return config.apiEndpoint + '/jobs' + id + '/log.txt?deansi=true';
};

githubPullRequest = function (slug, pullRequestNumber) {
  return config.sourceEndpoint + '/' + slug + '/pull/' + pullRequestNumber;
};

githubCommit = function (slug, sha) {
  return config.sourceEndpoint + '/' + slug + '/commit/' + sha;
};

githubRepo = function (slug) {
  return config.sourceEndpoint + '/' + slug;
}

githubWatchers = function (slug) {
  return config.sourceEndpoint + '/' + slug + '/watchers';
};

githubNetwork = function (slug) {
  return config.sourceEndpoint + '/' + slug + '/network';
};

githubAdmin = function (slug) {
  return config.sourceEndpoint + '/' + slug + '/settings/hooks#travis_minibucket';
};
