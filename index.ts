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
      day: 2,
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
    done: true,
    type: 'task',
  },
  {
    name: 'Copy center',
    time: {
      day: 5,
      hour: '16',
      minute: '50',
    },
    done: false,
    type: 'task',
  },
];

console.log(activities);

renderGrid();