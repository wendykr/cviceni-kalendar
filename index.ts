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
      hour: 13,
      minute: 30,
    },
    duration: 90,
    type: 'event',
  },
  {
    name: 'Learn English',
    time: {
      day: 2,
      hour: 18,
      minute: 15,
    },
    done: false,
    type: 'task',
  },
  {
    name: 'React 1 - Course',
    time: {
      day: 3,
      hour: 18,
      minute: 0,
    },
    duration: 180,
    type: 'event',
  },
  {
    name: 'Coffee break',
    time: {
      day: 1,
      hour: 14,
      minute: 55,
    },
    done: false,
    type: 'task',
  },
  {
    name: 'Call Session',
    time: {
      day: 5,
      hour: 16,
      minute: 50,
    },
    done: false,
    type: 'task',
  },
  {
    name: 'Meetup React Girls',
    time: {
      day: 1,
      hour: 8,
      minute: 25,
    },
    done: true,
    type: 'task',
  },
];

// console.log(activities);

// activities.forEach((activity) => {
//   if (activity.type === 'task') {
//     console.log(activity.name);
//   } else {
//     console.log(activity.duration);
//   }
// });

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
      } else {
        newItem.classList.add('item-task');
        newItem.style.height = 'auto';
        if (activity.done) {
          newItem.classList.add('task-done');
        }
      }

      newItem.textContent = activity.name;

      console.log(newItem);
      console.log(newItem.outerHTML);

      dayColumn.innerHTML += newItem.outerHTML;
    }
  });
}

renderCalendar(activities);