import { Component, Prop, h, State, Watch } from '@stencil/core';
import { getFormattedTime, getDayOfWeek } from '../../utils/utils';
import { storeLocationsDropdown } from '../../utils/stores-hours';
import TypeOfDeviceField from '../Fields/TypeOfDeviceField/TypeOfDeviceField';
import CustomerFields from '../Fields/CustomerFields/CustomerFields';
import LocationField from '../Fields/LocationField/LocationField';
import DateField from '../Fields/DateField/DateField';
import TimeField from '../Fields/TimeField/TimeField';
@Component({
  tag: 'appointment-form',
  //styleUrl: 'appointment-form.css',
  shadow: true,
})
export class MyComponent {
  @State() hours: any[] = [];
  @State() dayOfWeek: string = '';
  @State() closed: boolean;
  @Prop({ mutable: true }) locations: any = storeLocationsDropdown;
  @State() selectedLocation: string;
  @Prop() minutesStep: string;

  changeDate(event) {
    const currentDate = event.target.value;
    this.dayOfWeek = getDayOfWeek(currentDate);
    this.changeHours();
  }
  changeHours() {
    if (this.dayOfWeek && this.locations && this.selectedLocation) {
      let hours = [];
      const locationHours = this.locations[this.selectedLocation][
        this.dayOfWeek
      ];
      let { from: hoursFrom, to: hoursTo, closed } = locationHours;
      if (!closed) {
        while (hoursFrom < hoursTo) {
          let hoursFromWithMinutes = `${hoursFrom}:${this.minutesStep || "30"}`;
          hours = [
            ...hours,
            {
              value:
                hoursFrom > 9
                  ? `${hoursFromWithMinutes}`
                  : `0${hoursFromWithMinutes}`,
              text: getFormattedTime(hoursFrom, this.minutesStep || "30"),
            },
          ];
          hoursFrom++;
        }
        this.hours = hours;
        this.closed = false;
      } else {
        this.closed = true;
      }
    }
  }
  @Watch('locations')
  validateName(newValue: string) {
    if (newValue == null) {
      throw new Error('Locations: required');
    }
  }
  render() {
    return (
      <form
        id="my-form-id"
        method="POST"
        onSubmit={null}
        action="https://us-central1-nestjs-ionic-form-i.cloudfunctions.net/api/v1/forms"
        target="_top"
      >
        <LocationField
          locations={this.locations}
          onFieldChange={event => {
            this.selectedLocation = event.target.value;
          }}
        />
        <CustomerFields />
        <DateField
          onDateChange={event => {
            this.changeDate(event);
          }}
        />
        {this.closed ? (
          <label>Hours: Closed</label>
        ) : (
          <TimeField hours={this.hours} />
        )}
        <TypeOfDeviceField />
        <label htmlFor="message">
          Message <span class="forms-req-symbol">*</span>
        </label>
        <textarea name="message" cols={30} rows={10} required></textarea>
        <input type="submit" id="submit-button" value="Send" />
        <p id="submit-success"></p>
        <div submit-success="">
          <template type="amp-mustache">Send successful!</template>
        </div>
        <div submit-error="">
          <template type="amp-mustache">Send failed!</template>
        </div>
      </form>
    );
  }
}
