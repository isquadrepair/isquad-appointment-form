export const storesDropdown = [
  { location: 'Santee', open: '09', close: '4', selected: true },
  { location: 'Mission Valley', open: '09', close: '4' },
  { location: 'San Diego (Miramar)', open: '09', close: '4' },
  { location: 'Carlsbad', open: '9', close: '4' },
  { location: 'El Cajon', open: '9', close: '4' },
  { location: 'Encinitas', open: '9', close: '4' },
  { location: 'Oceanside', open: '9', close: '4' },
  { location: 'Mobile Service', open: '9', close: '4' },
];
export const storeLocations = {
  'Santee': {
    Monday: { from: 1, to: 22, closed: false },
    Tuesday: { from: 6, to: 24, closed: false },
    Wednesday: { from: 6, to: 11,closed: false },
    Thursday: { from: 6, to: 8, closed: false },
    Friday: { from: 6, to: 5, closed: false },
    Saturday: { from: 6, to: 5, closed: false },
    Sunday: { from: 6, to: 5, closed: false },
    selected: false
  },
  'Mission Valley': {
    monday: { from: 6, to: 5, closed: false },
    tuesday: { from: 6, to: 5, closed: false },
    wednesday: { from: 6, to: 5, closed: false },
    thursday: { from: 6, to: 5, closed: false },
    friday: { from: 6, to: 5, closed: false },
    saturday: { from: 6, to: 5, closed: false },
    sunday: { from: 6, to: 5, closed: false },
  },
  'San Diego (Miramar)': { from: 6, to: 5, closed: false },
  'Carlsbad': { from: 6, to: 5, closed: false },
  'El Cajon': { from: 6, to: 5, closed: false },
  'Encinitas': { from: 6, to: 5, closed: false },
  'Oceanside': { from: 6, to: 5, closed: false },
  'Mobile Service': { from: 6, to: 5, closed: false },
};
