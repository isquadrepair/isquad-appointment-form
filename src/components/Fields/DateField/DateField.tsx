import { FunctionalComponent, Fragment, h } from '@stencil/core';

const DateField: FunctionalComponent<any> = ({ onDateChange }) => (
  <Fragment>
    <label htmlFor="date">
      Date <span class="forms-req-symbol">*</span>
    </label>
    <input
      name="date"
      id="appointment-date"
      type="date"
      //value={this.dayOfWeek}
      onChange={event => {
        onDateChange(event);
      }}
    />
  </Fragment>
);

export default DateField;
