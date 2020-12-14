import { FunctionalComponent, Fragment, h } from '@stencil/core';

const AddressFields: FunctionalComponent<any> = () => (
  <Fragment>
    <label htmlFor="address">
      Address <span class="forms-req-symbol">*</span>
    </label>
    <input
      placeholder="Enter Your Address"
      type="text"
      name="address"
      required
    />
    <label htmlFor="zipCode">
      Zip Code <span class="forms-req-symbol">*</span>
    </label>
    <input
      placeholder="Enter Your Zip Code"
      type="number"
      name="zipCode"
      required
    />
  </Fragment>
);

export default AddressFields;
