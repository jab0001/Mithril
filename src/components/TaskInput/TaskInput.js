import m from 'mithril';
import Task from '../../models/Task';


const TaskInput = {
    view: () => m("div", [
      m("input.taskInput", {
        type: "text",
        placeholder: "Enter a task",
        value: Task.title,
        oninput: (e) => Task.title = e.target.value,
      }),
      m("button.addButton", { onclick: Task.addTask.bind(Task) }, "Add Task"),
    ])
  };

  export default TaskInput;