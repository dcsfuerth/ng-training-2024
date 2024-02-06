(function (module) {
    "use strict";
    
    var exports = module.exports;
    var _       = require('underscore');
    var http    = require('http');
    var path    = require('path');
    var fs      = require('fs');
    var mime    = require('mime');
    
    require('colors');
    
    // Mixin underscore.string
    _.mixin(require('underscore.string').exports());
    
    exports.defaults = {
        port: 9000,
        index: 'index.html',
        ignoreURLs: ['/favicon.ico']
    };
    
    exports.LocalServer = function (opts) {
        
        var self        = this,
            port        = parseInt(opts.port, 10),
            isValidPort = _.isNumber(port) && port > 0 && port < 65535;
        
        function requestHandler(req, res) {
            var url         = (req.url === '/' ? '/' + opts.index : req.url.split('?')[0]),
                fsurl       = '.' + url,
                ext,
                contentType;
            
            if (! fs.existsSync(fsurl)) {
                response(404, 'text/plain', 'Not Found', opts.ignoreURLs, req, res);
                return;
            }
            
            if (fs.statSync(fsurl).isDirectory()) {
                fsurl += '/' + opts.index;
            }
            fsurl       = path.normalize(fsurl);
            ext         = path.extname(fsurl);
            contentType = mime.lookup(fsurl);
            
            if (opts[ext] && opts[ext].headers) {
                contentType = opts[ext].headers['Content-Type'] || contentType;
            }
            
            fs.readFile(fsurl, function (err, data) {
                if (err) {
                    err = err.toString();
                    
                    response(500, 'text/plain', err, opts.ignoreURLs, req, res);
                    return;
                }

                response(200, contentType, data, opts.ignoreURLs, req, res);
            });
            
        }
        
        this.opts = opts = _.defaults(opts, exports.defaults);
        this.opts.port = port;
        
        if (! isValidPort) {
            logMsg('error', 'Invalid port number provided: %d', port);
            return;
        }
        
        Object.defineProperty(this, 'server', {
            value: http.createServer(requestHandler)
        });
        
        this.server.on('error', function (err) {
            logMsg('error', err.toString());
            process.exit(1);
        });
        
        this.server.on('listening', function () {
            logMsg('success', 'LocalServer is running on: http://localhost:%d/', self.opts.port);
        });
        
        this.server.listen(this.opts.port);
    };
    
    function response (code, contentType, data, ignoreURLs, req, res) {
        var url = req.url;
        
        if (! _.contains(ignoreURLs, url)) {
            switch (code) {
            case 500:
                logMsg('error', '[%d] %s (%s)', code, url, data);
                break;
            default:
                logMsg( (code !== 200 ? 'error' : 'log'), '[%d] %s', code, url);
            }
        }
        
        res.writeHead(code, {
            'Content-Type': contentType
        });
        res.end(data);
    }
    
    function logMsg (type) {
        var args = Array.prototype.slice.call(arguments, 1);
        
        if (type === 'error') {
            args[0] = args[0].red;
        } else if (type === 'success') {
            args[0] = args[0].green;
        }
        console.log.apply(console, args);
    }
    
    
}(module));
