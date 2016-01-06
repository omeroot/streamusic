module.exports = function(){
  this.loadTasks("tasks");

  this.registerTask("default", [
    "requirejs"
  ]);
}