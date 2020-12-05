import { Component, Prop, h, State, Watch } from '@stencil/core';
import Dropdown from '../dropdown/dropdown';
import hours from '../../utils/hours';
import { format, getFormattedTime, time24To12 } from '../../utils/utils';
import { storesDropdown, storeLocations } from '../../utils/stores-hours';
@Component({
  tag: 'appointment-form',
  styleUrl: 'appointment-form.css',
  shadow: true,
})
export class MyComponent {
  @State() hours: any[];
  @Prop({ mutable: true }) locations: any = storeLocations;

  changeHours(event: any) {
    const location = event.target.value;
    let hours = [];
    let beginLimit = this.locations[location].open;
    let endLimit = this.locations[location].close;
    while (beginLimit < endLimit) {
      hours = [...hours, getFormattedTime(beginLimit, 30)];
      beginLimit++;
      console.log('hours in while', hours);
    }
    this.hours = hours;
    console.log('hours', hours);
    console.log('hours', this.hours);
  }
  getHours() {
    return (
      this.hours.map(hour => ({
        value: hour,
        text: hour,
        selected: '',
      })) || null
    );
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
    //console.log('locations', this.locations);
    return locations;
  }
  @Watch('locations')
  validateName(newValue: string, oldValue: string) {
    if (newValue == null) {
      throw new Error('Locations: required');
    }
  }
  render() {
    this.getLocations();
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
            this.changeHours(event);
          }}
        />

        <Dropdown
          labelText="Hours"
          labelFor="hours"
          selectOptions={this.getHours()}
          reqSymol
          changeSelect={event => {
            //this.changeHours(event);
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
        <input name="date" id="appointment-date" type="date" value="" />
        <label htmlFor="time">
          Time <span class="forms-req-symbol">*</span>
        </label>
        <select name="time" required class="select-css">
          <option value="Select Time">Select Time</option>
          <option value="09:00">9:00 AM</option>
          <option value="09:30" class="hidden-encinitas">
            9:30 AM
          </option>
          <option value="10:00" class="hidden-encinitas">
            10:00 AM
          </option>
          <option value="10:30">10:30 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="11:30">11:30 AM</option>
          <option value="12:00">12:00 AM</option>
          <option value="12:30">12:30 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="13:30">1:30 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="14:30">2:30 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="15:30">3:30 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="16:30">4:30 PM</option>
          <option value="17:00">5:00 PM</option>
          <option value="17:30" class="hidden-encinitas">
            5:30 PM
          </option>
          <option value="18:00" class="hidden-encinitas">
            6:00 PM
          </option>
          <option value="18:30" class="hidden-encinitas">
            6:30 PM
          </option>
        </select>
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
