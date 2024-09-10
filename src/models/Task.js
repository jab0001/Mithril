const Task = {
    title: "",
    list: [],
    
    addTask: function() {
      if (this.title.trim() !== "") {
        this.list.push(this.title);
        this.title = "";
      }
    },

    deleteTask: function(id) {
        this.list.splice(id, 1);
      }
  };
  
  export default Task;