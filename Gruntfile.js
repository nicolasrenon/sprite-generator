module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          noLineComments: true,
          sassDir: 'app/styles/',
          cssDir: 'dist/styles/',
          imagesDir: 'app/images/',
          generatedImagesDir: 'dist/images/',
          httpGeneratedImagesPath: '../images/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);

};
