import { Component, Prop, h, State, Watch } from '@stencil/core';
import { getFormattedTime, getDayOfWeek } from '../../utils/utils';
import { storeLocations } from '../../utils/stores-hours';
import TypeOfDeviceField from '../Fields/TypeOfDeviceField/TypeOfDeviceField';
import CustomerFields from '../Fields/CustomerFields/CustomerFields';
import LocationField from '../Fields/LocationField/LocationField';
import DateField from '../Fields/DateField/DateField';
import TimeField from '../Fields/TimeField/TimeField';
@Component({
  tag: 'appointment-form',
  styleUrl: 'appointment-form.css',
  shadow: true,
})
export class MyComponent {
  @State() hours: any[] = [];
  @State() dayOfWeek: string = '';
  @Prop({ mutable: true }) locations: any = storeLocations;
  @State() selectedLocation: string;
  @Prop() minutesStep: string;

  changeDate(event) {
    const currentDate = event.target.value;
    this.dayOfWeek = getDayOfWeek(currentDate);
    console.log('cur day of week', this.dayOfWeek);
    this.changeHours();
  }
  changeHours() {
    if (this.dayOfWeek && this.locations && this.selectedLocation) {
      let hours = [];
      let beginLimit = this.locations[this.selectedLocation][this.dayOfWeek]
        .from;
      let endLimit = this.locations[this.selectedLocation][this.dayOfWeek].to;
      while (beginLimit < endLimit) {
        let beginLimitWithMinutes = `${beginLimit}:${this.minutesStep || 30}`;
        hours = [
          ...hours,
          {
            value:
              beginLimit > 9
                ? `${beginLimitWithMinutes}`
                : `0${beginLimitWithMinutes}`,
            text: getFormattedTime(beginLimit, this.minutesStep || 30),
          },
        ];
        beginLimit++;
        console.log('hours in while', hours);
      }
      this.hours = hours;
      console.log('hours out while', this.hours);
    }
  }
  @Watch('locations')
  validateName(newValue: string, oldValue: string) {
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
        <TimeField hours={this.hours} />
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
