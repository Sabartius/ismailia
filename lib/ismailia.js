"use strict";
var $__traceur_64_0_46_0_46_58__,
    $__istanbul__,
    $__instrumenter__;
var traceur = ($__traceur_64_0_46_0_46_58__ = require("traceur"), $__traceur_64_0_46_0_46_58__ && $__traceur_64_0_46_0_46_58__.__esModule && $__traceur_64_0_46_0_46_58__ || {default: $__traceur_64_0_46_0_46_58__}).default;
var istanbul = ($__istanbul__ = require("istanbul"), $__istanbul__ && $__istanbul__.__esModule && $__istanbul__ || {default: $__istanbul__}).default;
var Instrumenter = ($__instrumenter__ = require("./instrumenter"), $__instrumenter__ && $__instrumenter__.__esModule && $__instrumenter__ || {default: $__instrumenter__}).Instrumenter;
for (var key in istanbul) {
  if (istanbul.hasOwnProperty(key)) {
    $traceurRuntime.setProperty(exports, key, istanbul[$traceurRuntime.toProperty(key)]);
  }
}
exports.Instrumenter = Instrumenter;
exports.version = require('../package.json').version;
