import Symptoms from '../screens/Symptoms/Symptoms';
import Protection from '../screens/Protection/Protection';
import Overview from '../screens/Overview/Overview';

export const routes = [
  {
    component: Overview,
    name: 'Overview',
    header: false,
    key: 3,
  },
  {
    component: Symptoms,
    name: 'Symptoms',
    header: false,
    key: 2,
  },
  {
    component: Protection,
    name: 'Protection',
    header: false,
    key: 1,
  },
];

export const links = {
  Symptoms: 'Symptoms',
  Protection: 'Protection',
  Overview: 'Overview',
};
