interface Time {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  hour: number;
  minute: number;
}

interface BaseActivity {
  name: string;
  time: Time;
  type: 'event' | 'task' | 'holiday' | 'meeting';
}

export interface Event extends BaseActivity {
  duration: number;
  type: 'event' | 'meeting';
}

export interface Task extends BaseActivity {
  done: boolean;
  type: 'task';
}

export interface Holiday extends BaseActivity {
  type: 'holiday';
}

export type Activity = Event | Task | Holiday;