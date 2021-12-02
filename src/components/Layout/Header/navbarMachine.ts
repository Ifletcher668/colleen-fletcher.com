import { assign, createMachine, State } from 'xstate';

type Context = {
  isActive: boolean;
  panelName: string;
};

type MachineStateSchema =
  | { value: 'hidden'; context: Context }
  | { value: 'shown'; context: Context };

type Event =
  | { type: 'SHOW'; isActive: boolean; panelName: string }
  | { type: 'HIDE'; isActive: boolean; panelName: string };

export type NavbarMachineState = State<Context, Event, any, MachineStateSchema>;

const navbarMachine = createMachine<Context, Event, MachineStateSchema>(
  {
    id: 'navbar',
    initial: 'hidden',
    context: {
      isActive: false,
      panelName: '',
    },
    states: {
      shown: {
        on: {
          HIDE: {
            target: 'hidden',
            actions: ['hide'],
          },
          SHOW: {
            // If already an active tab, show another
            target: 'shown',
            actions: ['show'],
          },
        },
      },
      hidden: {
        on: {
          SHOW: {
            target: 'shown',
            actions: ['show'],
          },
        },
      },
    },
  },
  {
    actions: {
      show: assign((_context, { panelName }) => ({
        isActive: true,
        panelName: panelName,
      })),
      hide: assign(_ => ({
        isActive: false,
        panelName: '',
      })),
    },
  },
);

export default navbarMachine;
