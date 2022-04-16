import React from "react";
import { Input, Select } from "antd";
import NumberFormat from "react-number-format";

const PhoneInputAntd = ({
  value,
  onChange,
  placeholder,
  style,
  className,
  disabled,
  size,
}) => {
  return (
    <NumberFormat
      disabled={disabled}
      className={className}
      style={style}
      customInput={Input}
      placeholder={placeholder}
      value={value}
      onValueChange={(e) => {
        onChange(e.value);
      }}
      size={size}
      format="#### #### #### ####"
    />
  );
};

const SmMultiplePhoneInput = ({
  value = [],
  onChange = (e) => console.log(e),
  style,
  className,
  placeholder,
  size = "default",
  disabled = false,
}) => {
  return (
    <Select
      disabled={disabled}
      size={size}
      mode="tags"
      style={style}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(v) => {
        // if (v.filter((e) => e.match(/^\d/)).length <= 3) {

        // }
        onChange(v.filter((e) => e.match(/^\d/)));
      }}
      notFoundContent={null}
      autoClearSearchValue
    >
      {/* {children} */}
    </Select>
  );
};

export { PhoneInputAntd, SmMultiplePhoneInput };
