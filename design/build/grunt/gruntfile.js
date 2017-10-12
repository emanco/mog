module.exports = function (grunt) {

    var package = grunt.file.readJSON('package.json');

    var js_directories = [];
    var scss_directories = [];

    //Libs
    js_directories.push(package.build_directory + "/libs/*/js/{**/*,*}.js");
    scss_directories.push(package.build_directory + "/libs/*/{scss,css}/{**/*,*}.{scss,css}");

    //Globals
    js_directories.push(package.build_directory + "/global/js/{**/*,*}.js");
    scss_directories.push(package.build_directory + "/global/{scss,css}/{**/*,*}.{scss,css}");

    //Components
    js_directories.push(package.build_directory + "/components/*/js/{**/*,*}.js");
    scss_directories.push(package.build_directory + "/components/*/{scss,css}/{**/*,*}.{scss,css}");

    //Pages
    js_directories.push(package.build_directory + "/pages/js/{**/*,*}.js");
    scss_directories.push(package.build_directory + "/pages/{scss,css}/{**/*,*}.{scss,css}");

    grunt.initConfig({
        pkg: package,

        concat: {
            js: {
                options: {
                    separator: ''
                },
                src: js_directories,
                dest: package.dist_directory + '/js/global.cat.js'
            },
            scss: {
                options: {
                    separator: ''
                },
                src: scss_directories,
                dest: package.dist_directory + '/css/global.cat.scss'
            }
        },

        //Minify JS
        uglify: {
            main: {
                options: {
                    beautify: package.debug_mode
                },
                files: {
                    '../../dist/js/global.min.js': package.dist_directory + '/js/global.cat.js'
                }
            }
        },

        // Compile SCSS into CSS
        sass: {
            main: {
                files: {
                    '../../dist/css/global.css': package.dist_directory + '/css/global.cat.scss'
                }
            }
        },

        //Add vendor prefixes
        postcss: {
            options: {
                map:false,
                processors: [
                    require('autoprefixer')({browsers: 'last 5 versions'}), // add vendor prefixes
                ]
            },
            dist: {
                src: package.dist_directory + '/css/global.css'
            }
        },

        // Minify CSS
        cssmin: {
            main: {
                files: {
                    '../../dist/css/global.min.css': package.dist_directory + '/css/global.css'
                }
            }
        },

        // Minify images
        imagemin: {
            files: {
                '../../dist/img/{**/*,*}.{gif,png,jpg}': package.dist_directory + '/img/{**/*,*}.min.{gif,png,jpg}'
            }
        },

        // Remove .cat and other files created by other grunt tasks that aren't needed
        clean: {
            js: [package.dist_directory + "/js/global.cat.js", package.dist_directory + "/js/admin.cat.js"],
            scss: [package.dist_directory + "/css/global.css", package.dist_directory + "/css/global.cat.scss"],
            options:{
                force:true
            }
        },

        watch: {
            scss: {
                files: scss_directories,
                tasks: ['concat:scss', 'sass:main', 'postcss', 'cssmin:main', 'clean:scss'],
                options: {
                    livereload: true, //! important
                }
            },
            js: {
                files: js_directories,
                tasks: ['concat:js', 'uglify:main', 'clean:js']
            },
            image: {
                files: ['/img/{**/*,*}.{gif,png,jpg}'],
                tasks: ['newer:imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-postcss');

    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'postcss', 'cssmin', 'clean', 'watch']);
    grunt.registerTask('imagemin', ['newer:imagemin']);
};