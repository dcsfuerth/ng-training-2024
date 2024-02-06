module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: {
            all: ['./bin/*.js', 'lib/*.js', 'lib/**/*.js'],
            options: {
                bitwise:    true,
                camelcase:  true,
                curly:      true,
                eqeqeq:     true,
                forin:      true,
                immed:      true,
                latedef:    true,
                newcap:     true,
                noarg:      true,
                nonew:      true,
                undef:      true,
                unused:     true,
                strict:     true,
                trailing:   true,
                node:       true

            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['jshint']);
};