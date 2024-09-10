import m from 'mithril';
import Task from '../../models/Task';

const TaskList = {
  view: () => m("ul.taskList", Task.list.map((task, index) => m("li.taskItem", { key: index, onclick: () => Task.deleteTask(index)}, task)))
};

export default TaskList;