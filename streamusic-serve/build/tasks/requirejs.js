module.exports = function(){
  this.loadNpmTasks("grunt-contrib-requirejs");

  return this.config("requirejs", {
    release: {
      options: {
        mainConfigFile: "../public/js/boot.js",
        generateSourceMaps: false,
        optimize: "uglify2",
        baseUrl: "../public/js",
        out: "dist/source.min.js",
        paths: {
          "almond": "../../build/bower_components/almond/almond"
        },
        name: "almond",
        preserveLicenseComments: false
      }
    }
  });
}