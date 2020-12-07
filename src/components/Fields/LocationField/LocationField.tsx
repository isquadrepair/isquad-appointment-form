import { FunctionalComponent, h } from '@stencil/core';
import Dropdown from '../../dropdown/dropdown';

const LocationField: FunctionalComponent<any> = ({
  locations,
  onFieldChange,
}) => {
  const locationsSelectOptions = Object.entries(locations).map(
    ([location, values]) => ({
      value: location,
      text: location,
      selected: values['selected'],
    }),
  );

  return (
    <Dropdown
      labelText="Location"
      labelFor="location"
      mainSelectOption="Select a Location"
      selectOptions={locationsSelectOptions}
      reqSymol
      changeSelect={event => {
        onFieldChange(event);
      }}
    />
  );
};

export default LocationField;
