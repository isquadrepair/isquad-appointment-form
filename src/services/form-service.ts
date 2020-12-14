import { getFormattedTime } from '../utils/utils';

export class FormService {
  async submitForm(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data,
      });
      if (response.status >= 400 && response.status < 600) {
        throw { text: 'Send Failed!', disabled: false };
      }
      if (response.ok) {
        return { text: 'Send Successful.', disabled: true };
      }
    } catch (error) {
      // Fetch detects only network errors.
      throw { text: 'Send Failed!', disabled: false };
    }
  }
  getHours(hours, minutesStep) {
    let { from: hoursFrom, to: hoursTo, closed } = hours;

    let hoursArray = [];
    while (hoursFrom < hoursTo) {
      let hoursFromWithMinutes = `${hoursFrom}:${minutesStep || '30'}`;
      hoursArray = [
        ...hoursArray,
        {
          value:
            hoursFrom > 9
              ? `${hoursFromWithMinutes}`
              : `0${hoursFromWithMinutes}`,
          text: getFormattedTime(hoursFrom, minutesStep || '30'),
        },
      ];
      hoursFrom++;
    }
    return hoursArray;
  }
}
