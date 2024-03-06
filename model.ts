interface BaseActivity {
  name: string;
  time: Time;
  type: 'event' | 'task';
}

export interface Event extends BaseActivity {
  duration: number;
  type: 'event';
}

export interface Task extends BaseActivity {
  done: boolean;
  type: 'task';
}

export type Activity = Event | Task;

interface Time {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  hour: number;
  minute: number;
}