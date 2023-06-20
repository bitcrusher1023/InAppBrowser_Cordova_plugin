var exec = require("cordova/exec");
module.exports = {
  isAvailable: function (onSuccess, onError) {
    exec(onSuccess, onError, "SafariViewController", "isAvailable", []);
  },
  show: function (options, onSuccess, onError) {
    exec(onSuccess, onError, "SafariViewController", "show", [options]);
  }
};