module.exports = function(grunt) {
    //project config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       
        // watch our node server for changes
        nodemon: {
            dev: {
                script: 'app.js',
                option: {
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    },
                    env: {
                        PORT: '3000'
                    },
                    cwd: __dirname,
                    ignore: ['node_modules/**'],
                    ext: 'js,coffee',
                    watch: ['app'],
                    delay: 1000,
                    legacyWatch: true
                }

            }
        },

        // run watch and nodemon at the same time
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon']
        }   

    });

    //dependent plugins
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //tasks
    grunt.registerTask('default', ['concurrent']);
}
