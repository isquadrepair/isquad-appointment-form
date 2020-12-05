import { Fragment, FunctionalComponent, h } from '@stencil/core';

interface props {
  labelText: string;
  labelFor: string;
  selectOptions: [{ value: string; text: string; selected: boolean }];
  reqSymol: string;
  changeSelect: Function;
}

const Dropdown: FunctionalComponent<any> = ({
  labelText,
  labelFor,
  selectOptions,
  reqSymol,
  changeSelect,
}: props) => (
  <Fragment>
    <label htmlFor={labelFor}>
      {labelText} {reqSymol && <span class="forms-req-symbol">*</span>}
    </label>
    <select
      name={labelFor}
      required
      class="select-css"
      onChange={event => {
        changeSelect(event);
      }}
    >
      {selectOptions &&
        selectOptions.map(({ value, text, selected }) => (
          <option value={value} selected={selected}>
            {text}
          </option>
        ))}
    </select>
  </Fragment>
);

export default Dropdown;
