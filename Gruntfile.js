module.exports = function( grunt ) {

    "use strict";

    var resourceDir = "src/";
    var resourceNames = [
        "calendar-data",
        "currency-names",
        "format-data",
        "locale-names"
    ];

    var availableLocales = {};
    var languageTags = [];
    var resourceFiles = [];
    resourceNames.forEach( function( baseName ) {
        var prefix = resourceDir + baseName;
        var pattern = prefix + "-*.js";
        resourceFiles.push( resourceDir + baseName + ".js" );
        grunt.file.expandMapping( pattern ).forEach( function( item ) {
            var fileName = item.dest;
            var languageTag = fileName.substring( prefix.length + 1, fileName.lastIndexOf( "." ) );
            var languageResourceFiles = availableLocales[ languageTag ] || [];
            languageResourceFiles.push( fileName );
            availableLocales[ languageTag ] = languageResourceFiles;
        } );
    } );

    var uglify = {
        options: {
            ASCIIOnly: true,
            banner: "/*! <%=pkg.name %> | <%= pkg.version %> | <%= grunt.template.today('yyyy-mm-dd') %> */\n"
        },
        main: {
            options: {
                mangle: false,
                compress: false,
                beautify: true,
                preserveComments: "all"
            },
            files: {
                "dist/text-resources.js": resourceFiles
            }
        },
        dist: {
            options: {
                sourceMap: true
            },
            files: {
                "dist/text-resources.min.js": "dist/text-resources.js"
            }
        }
    };

    for ( var prop in availableLocales ) {
        languageTags.push( prop );
    }

    languageTags.sort();
    languageTags.forEach( function( tag ) {
        var dest = "dist/text-resources-" + tag;
        uglify.main.files[ dest + ".js" ] = availableLocales[ tag ];
        uglify.dist.files[ dest + ".min.js" ] = dest + ".js";
    } );

    grunt.initConfig( {

        pkg: grunt.file.readJSON( "package.json" ),

        clean: {
            dist: "dist/",
            lib: "lib/"
        },

        copy: {
            main: {
                expand: true,
                cwd: "src/",
                src: "**",
                dest: "lib/"
            }
        },

        uglify: uglify

    } );

    grunt.loadNpmTasks( "grunt-contrib-clean" );
    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );

    grunt.registerTask( "default", [ "clean", "copy", "writeMain", "uglify:main", "uglify:dist" ] );

    grunt.registerTask( "writeMain", function() {
        var globalVariables = [ "CalendarData", "CurrencyNames", "FormatData", "LocaleNames" ];
        var output = "index.js";
        var content = "// THIS IS A GENERATED FILE. DO NOT EDIT IT!!!\n";
        content += "\"use strict\";\n";
        content += "\n";
        resourceNames.forEach( function( baseName, i ) {
            content += "global[ \"" + globalVariables[ i ] + "\" ] = require( \"./lib/" + baseName + "\" );\n";
        } );
        resourceNames.forEach( function( baseName ) {
            var prefix = "lib/" + baseName;
            var pattern = prefix + "-*.js";
            content += "\n";
            grunt.file.expandMapping( pattern ).forEach( function( item ) {
                var fileName = item.dest;
                var moduleId = fileName.substring( 0, fileName.lastIndexOf( "." ) );
                content += "require( \"./" + moduleId + "\" );\n";
            } );
        } );
        if ( grunt.file.exists( output ) ) {
            grunt.file.delete( output );
        }
        grunt.file.write( output, content );
    } );

};
