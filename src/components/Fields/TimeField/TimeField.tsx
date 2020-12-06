import { FunctionalComponent, Fragment, h } from '@stencil/core';
import Dropdown from '../../dropdown/dropdown';

interface TimeFieldProps {
  hours: any[];
}

const TimeField: FunctionalComponent<TimeFieldProps> = ({ hours }) => {
  const selectOptions = hours.map(({ value, text }) => ({
    value,
    text,
    selected: '',
  }));

  return (
    <Dropdown
      labelText="Time"
      labelFor="time"
      mainSelectOption="Select Time"
      selectOptions={selectOptions}
      reqSymol={true}
      changeSelect={event => {
        // this.changeHours(event);
      }}
    />
  );
};

export default TimeField;
