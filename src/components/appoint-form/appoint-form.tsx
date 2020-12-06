import { Component, Prop, h, State, Watch } from '@stencil/core';
import Dropdown from '../dropdown/dropdown';
import { getFormattedTime, getDayOfWeek } from '../../utils/utils';
import { storeLocations } from '../../utils/stores-hours';

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
    console.log('eve0', currentDate);
    this.dayOfWeek = getDayOfWeek(currentDate);
    console.log('eve0', this.dayOfWeek);
    this.changeHours();
  }
  changeHours() {
    if (this.dayOfWeek && this.selectedLocation) {
      let hours = [];
      let beginLimit = this.locations[this.selectedLocation][this.dayOfWeek]
        .from;
      let endLimit = this.locations[this.selectedLocation][this.dayOfWeek].to;
      while (beginLimit < endLimit) {
        hours = [
          ...hours,
          getFormattedTime(beginLimit, this.minutesStep || 30),
        ];
        beginLimit++;
        console.log('hours in while', hours);
      }
      this.hours = hours;
      console.log('hours', hours);
      console.log('hours', this.hours);
    }
  }
  getHours() {
    return this.hours.map(hour => ({
      value: hour,
      text: hour,
      selected: '',
    }));
  }
  getLocations() {
    let locations = Object.entries(this.locations).map(
      ([location, values]) => ({
        value: location,
        text: location,
        selected: values['selected'],
      }),
    );
    console.log('locations', locations);
    return locations;
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
        <Dropdown
          labelText="Location"
          labelFor="location"
          selectOptions={this.getLocations()}
          reqSymol
          changeSelect={event => {
            this.selectedLocation = event.target.value;
          }}
        />
        <label htmlFor="name">
          Name <span class="forms-req-symbol">*</span>
        </label>
        <input placeholder="Enter Your Name" type="text" name="name" required />
        <label htmlFor="email">
          Email Address <span class="forms-req-symbol">*</span>
        </label>
        <input
          placeholder="Enter Your Email Address"
          type="email"
          name="email"
          required
        />
        <label htmlFor="phone">
          Phone Number <span class="forms-req-symbol">*</span>
        </label>
        <input
          placeholder="Enter Your Phone Number"
          type="text"
          name="phone"
          required
        />
        <label htmlFor="date">
          Date <span class="forms-req-symbol">*</span>
        </label>
        <input
          name="date"
          id="appointment-date"
          type="date"
          //value={this.dayOfWeek}
          onChange={event => {
            this.changeDate(event);
          }}
        />
        <Dropdown
          labelText="Time"
          labelFor="time"
          selectOptions={this.getHours()}
          reqSymol={true}
          changeSelect={event => {
            // this.changeHours(event);
          }}
        />
        <label htmlFor="deviceType">
          Type of Device <span class="forms-req-symbol">*</span>
        </label>
        <select name="deviceType" required class="select-css">
          <option value="" selected>
            Select Type of Device for Repair
          </option>
          <option value="iphone">iPhone</option>
          <option value="ipad">iPad</option>
          <option value="iwatch">iWatch</option>
          <option value="samsung-galaxy-phone">Samsung Galaxy Phone</option>
          <option value="computer-laptop">Computer/Laptop</option>
        </select>
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
