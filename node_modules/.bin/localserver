#!/usr/bin/env node

(function () {
    "use strict";
    
    var program     = require('commander'),
        _           = require('underscore'),
        localserver = require('../lib/server'),
        defaults    = localserver.defaults,
        opts;
    
    // Mixin underscore.string
    _.mixin(require('underscore.string').exports());
    
    program
        .version('0.1.3')
        .option('-p, --port [port]', _.sprintf('Start the server on specified port. Defaults to "%d"', defaults.port), defaults.port)
        .option('--index [index]', _.sprintf('Specify index file. Defaults to "%s"', defaults.index), defaults.index)
        .option('--favicon [favicon]', 'If specified, will log a request to "/favicon.ico".')
        .parse(process.argv);
    
    opts = {
        port: program.port,
        index: program.index,
        ignoreURLs: defaults.ignoreURLs
    };
    
    if (program.favicon) {
        opts.ignoreURLs = _.without(opts.ignoreURLs, '/favicon.ico');
    }
    
    return new localserver.LocalServer(opts);
    
}());
