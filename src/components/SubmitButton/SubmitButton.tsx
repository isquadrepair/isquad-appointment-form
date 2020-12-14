import { FunctionalComponent, h } from '@stencil/core';

const Form: FunctionalComponent<any> = ({ text, disabled }) => {
  return (
    <input type="submit" id="submit-button" value={text} disabled={disabled} />
  );
};

export default Form;
