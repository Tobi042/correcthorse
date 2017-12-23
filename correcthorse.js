'use strict';

var wordlist = require('./wordlist.json');
var randomNumber = require("random-number-csprng");
var async = require('asyncawait').async;
var await = require('asyncawait').await;


module.exports = async(function(options) {
  var o = options || {};
  var len = o.length || 16;
  var count = o.words || 4;
  var separator = o.separator || '-';
  var maxFails = o.maxFails || 10;

  var result = '';
  var failCount = 0;

  while (count-- > 0 || result.length < len) {
    try {
      result += wordlist[await(randomNumber(0, wordlist.length))] + separator;
    } catch (err) {
      failCount++;
      if (failCount > maxFails) {
        throw err;
      }
    }
  }

  return result.slice(0, -1);
});

