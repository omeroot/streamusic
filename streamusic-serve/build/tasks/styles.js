module.exports = function(){
  this.loadNpmTasks("grunt-bbb-styles");
  return this.config("styles", {
    "dist/styles.css": {
      src: "../public/stylesheets",
      paths: ["../public/stylesheets"]
    }
  })
}