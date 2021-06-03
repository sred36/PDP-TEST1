
module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks); 
     // Project configuration. 
   
       grunt.initConfig({ 
           pkg: grunt.file.readJSON('package.json'), 
             // Minify CSS
           sass: {
               dist: {
                 options: {
                   sourcemap: false,
                   compress: false,
                   style: 'expanded',
                 },
                 files: {
                   'css/global.css' : 'scss/global.scss'
                 }
               },
           },
           cssmin: {
               build: {
                   files: {
                       'css/global.min.css' : ['css/global.css']
                   }   
               }
           },
           uglify: { 
               options: { 
                   compress: true 
               }, 
               build: { 
                   src: [ 
                   // source files 
                   "js/global.js"
                   ], 
                   dest: 'js/global.min.js' 
               } 
           },
           watch: {
               css: {
                 files: 'css/*.css',
                 tasks: ['sass']
               },
               cssmin: {
                   files: 'css/*.css',
                   tasks: ['cssmin']
               },
               js: {
                   files: 'js/*.js',
                   tasks: ['uglify']
               }
           }
       });
       
       grunt.loadNpmTasks('grunt-contrib-uglify');
       grunt.loadNpmTasks('grunt-contrib-sass');
       grunt.loadNpmTasks ('grunt-contrib-cssmin');
       grunt.loadNpmTasks('grunt-contrib-watch');
        // Default task. 
      // grunt.registerTask('default',['watch']);
       grunt.registerTask('scss',['sass','cssmin']);
       grunt.registerTask('js',['uglify']);
       
   };
   