import { FunctionalComponent, Fragment, h } from '@stencil/core';

const TypeOfDeviceField: FunctionalComponent<any> = () => (
  <Fragment>
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
  </Fragment>
);

export default TypeOfDeviceField;
