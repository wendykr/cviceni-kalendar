import { Activity } from './model.js';

const renderGrid = (): void => {
  const gridElement = document.querySelector('.grid')!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.appendChild(cell);
  }
};

renderGrid();

const activities: Activity[] = [
  {
    name: 'Job Fair Czechitas',
    time: {
      day: 4,
      hour: '13',
      minute: '30',
    },
    duration: 90,
    type: 'event',
  },
  {
    name: 'Learn English',
    time: {
      day: 4,
      hour: '18',
      minute: '15',
    },
    done: false,
    type: 'task',
  },
  {
    name: 'React 1 - Course',
    time: {
      day: 3,
      hour: '18',
      minute: '00',
    },
    duration: 180,
    type: 'event',
  },
  {
    name: 'Coffee break',
    time: {
      day: 1,
      hour: '14',
      minute: '55',
    },
    done: false,
    type: 'task',
  },
  {
    name: 'Call Session',
    time: {
      day: 5,
      hour: '16',
      minute: '50',
    },
    done: true,
    type: 'task',
  },
  {
    name: 'ReactGirls Mentoring',
    time: {
      day: 6,
      hour: '18',
      minute: '25',
    },
    duration: 120,
    type: 'meeting',
  },
  {
    name: 'Easter Monday',
    time: {
      day: 1,
      hour: '00',
      minute: '00',
    },
    type: 'holiday',
  },
  {
    name: 'Typescript - Course',
    time: {
      day: 2,
      hour: '18',
      minute: '00',
    },
    duration: 120,
    type: 'event',
  },
  {
    name: 'Wash the dishes',
    time: {
      day: 7,
      hour: '13',
      minute: '04',
    },
    done: false,
    type: 'task',
  },
];

const renderCalendar = (activities: Activity[]): void => {
  activities.forEach((activity) => {
    const dayColumn: HTMLElement | null = document.getElementById(`day${activity.time.day}`);

    if (dayColumn) {
      const newItem: HTMLDivElement = document.createElement('div');
      newItem.classList.add('calendar-item');
      newItem.style.marginTop = ((60 * (Number(activity.time.hour)) + Number(activity.time.minute))) + 'px';

      if (activity.type === 'event') {
        newItem.classList.add('item-event');
        newItem.style.height = activity.duration + 'px';
      } else if (activity.type === 'task') {
        newItem.classList.add('item-task');
        newItem.style.height = 'auto';
        if (activity.done) {
          newItem.classList.add('task-done');
        }
      } else if (activity.type === 'holiday') {
        newItem.classList.add('item-holiday');
        newItem.style.height = 'auto';
      } else {
        newItem.classList.add('item-meeting');
        newItem.style.height = activity.duration + 'px';
      }

      newItem.innerHTML =
        `${activity.name}<br>
        ${activity.time.hour}:${activity.time.minute}`;

      dayColumn.appendChild(newItem);
    }
  });
}

renderCalendar(activities);