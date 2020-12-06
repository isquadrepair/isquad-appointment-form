import { FunctionalComponent, Fragment, h } from '@stencil/core';

const CustomerFields: FunctionalComponent<any> = () => (
  <Fragment>
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
  </Fragment>
);

export default CustomerFields;
