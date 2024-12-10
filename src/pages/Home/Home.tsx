import { Widget } from './components/Widget';
import { useTasksCount } from './hooks';

import s from './Home.module.css';

export const Home = () => {
  const { tasksCount } = useTasksCount();

  return (
    <div className={s.root}>
      <div className={s.content}>
        <Widget title={tasksCount.todo} subtitle="Active Task" to="/tasks" />
        <Widget title={tasksCount.in_progress} subtitle="In Progress Task" to="/tasks" />
        <Widget title={tasksCount.done} subtitle="Completed Task" to="tasks" />
      </div>
    </div>
  );
};
