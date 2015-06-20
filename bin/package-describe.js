#!/usr/bin/env node

var fs = require('fs'),
    extend = require('extend'),
    PackageJson = require('package-json');

var package = JSON.parse(fs.readFileSync('./package.json'));

var dependencies = extend(package.dependencies, package.devDependencies);
for (var key in dependencies) {
  PackageJson(key, dependencies[key], function(err, json) {
    console.log(json.name + ': ' + json.description);
  });
}
