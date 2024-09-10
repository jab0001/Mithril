import m from 'mithril';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import './styles/styles.scss'; // Импорт стилей

const App = {
  view: () => m("div", [
    m("h1", "Task List"),
    m(TaskInput),
    m(TaskList)
  ])
};

m.mount(document.getElementById('app'), App);