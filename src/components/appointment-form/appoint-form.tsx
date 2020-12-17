import { Component, Prop, h, State, Watch } from '@stencil/core';
import { getDayOfWeek } from '../../utils/utils';
import { storeLocationsDropdown } from '../../utils/stores-hours';
import TypeOfDeviceField from '../Fields/TypeOfDeviceField/TypeOfDeviceField';
import CustomerFields from '../Fields/CustomerFields/CustomerFields';
import LocationField from '../Fields/LocationField/LocationField';
import DateField from '../Fields/DateField/DateField';
import TimeField from '../Fields/TimeField/TimeField';
import AddressFields from '../Fields/AddressFields/AddressFields';
import { hours } from '../../interfaces/hours';
import { FormService } from '../../services/form-service';
import SubmitButton from '../SubmitButton/SubmitButton';
import { SendButton } from '../../interfaces/send-button';
@Component({
  tag: 'appointment-form',
  styleUrl: 'appointment-form.css',
  shadow: false,
})
export class MyComponent {
  @State() hours: any[] = [];
  @State() dayOfWeek: string = '';
  @State() closed: boolean;
  @State() sendButton: SendButton;
  @Prop() formSubmitUrl: string =
    'https://us-central1-nestjs-ionic-form-i.cloudfunctions.net/api/v1/forms/sendMail';
  @Prop({ mutable: true }) locations: any = storeLocationsDropdown;
  @State() selectedLocation: string;
  @Prop() minutesStep: string;
  @Prop() isMobileAppointment: boolean = false;
  @Prop() mobileHours: any;
  formService: FormService = new FormService();

  changeDate(event) {
    const currentDate = event.target.value;
    this.dayOfWeek = getDayOfWeek(currentDate);
    this.changeHours();
  }
  changeHours() {
    if (this.dayOfWeek && this.locations && this.selectedLocation) {
      const locationHours = this.locations[this.selectedLocation][
        this.dayOfWeek
      ];
      this.updateHours(locationHours);
    } else if (this.dayOfWeek && this.mobileHours && this.isMobileAppointment) {
      const hours = this.mobileHours[this.dayOfWeek];
      this.updateHours(hours);
    }
  }
  updateHours(hours: hours) {
    const { closed } = hours;
    if (!closed) {
      this.hours = this.formService.getHours(hours, this.minutesStep);
      this.closed = false;
    } else {
      this.closed = true;
    }
  }
  @Watch('locations')
  validateName(newValue: string) {
    if (newValue == null) {
      throw new Error('Locations: required');
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.sendButton = { text: 'Sending', disabled: false };
    try {
      this.sendButton = await this.formService.submitForm(
        this.formSubmitUrl,
        data,
      );
    } catch (error) {
      this.sendButton = error;
    }
  }
  render() {
    return (
      <form
        id="my-form-id"
        onSubmit={event => {
          this.handleSubmit(event);
        }}
      >
        <CustomerFields />
        {this.isMobileAppointment ? (
          <AddressFields />
        ) : (
          <LocationField
            locations={this.locations}
            onFieldChange={event => {
              this.selectedLocation = event.target.value;
              this.changeHours();
            }}
          />
        )}
        <DateField
          onDateChange={event => {
            this.changeDate(event);
          }}
        />
        {this.closed ? (
          <label>Hours: Closed {this.dayOfWeek ? `on ${this.dayOfWeek}`: ""}</label>
        ) : (
          <TimeField hours={this.hours} />
        )}
        <TypeOfDeviceField />
        <label htmlFor="message">
          Message <span class="forms-req-symbol">*</span>
        </label>
        <textarea name="message" cols={30} rows={10} required></textarea>
        <SubmitButton {...this.sendButton} />
      </form>
    );
  }
}
