export const TASK_PRIORITIES = {
  low: {
    value: 'low',
    label: 'Low',
    backgroundColor: 'var(--success-50)',
    color: 'var(--success-700)',
    borderColor: 'var(--success-200)',
  },
  medium: {
    value: 'medium',
    label: 'Medium',
    backgroundColor: 'var(--warning-50)',
    color: 'var(--warning-700)',
    borderColor: 'var(--warning-200)',
  },
  high: {
    value: 'high',
    label: 'High',
    backgroundColor: 'var(--red-50)',
    color: 'var(--red-700)',
    borderColor: 'var(--red-200)',
  },
};

export const TASK_STATUSES = {
  backlog: {
    value: 'backlog',
    label: 'Backlog',
    icon: 'circle-cut',
  },
  todo: {
    value: 'todo',
    label: 'To Do',
    icon: 'circle-cut',
  },
  in_progress: {
    value: 'in_progress',
    label: 'In Progress',
    icon: 'clock-stopwatch',
  },
  done: {
    value: 'done',
    label: 'Done',
    icon: 'check-circle',
  },
  archived: {
    value: 'archived',
    label: 'Archived',
    icon: 'archive',
  },
};
