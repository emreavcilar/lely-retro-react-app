import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const InputText = (props) => {
  const {
    type,
    onChange,
    label,
    placeholder,
    id,
    errorMessage,
    onBlur,
    disabled,
    readOnly,
    maxLength,
    min,
    max,
    step,
  } = props;

  const className = ['input-container'];
  className.push(props.className);

  const labelClassName = ['input-label'];
  labelClassName.push(props.labelClassName);

  const inputClassName = ['p-2'];
  inputClassName.push(props.inputClassName);

  return (
    <>
      <div className={className.join(' ')}>
        {label &&
          <label htmlFor={id} className={labelClassName.join(' ')}>{{ label }}</label>
        }

        <>
          <input
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            id={id}
            className={inputClassName.join(' ')}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            min={min}
            max={max}
            step={step}

          />
        </>

        {errorMessage &&
          <span className='text-danger'>{errorMessage}</span>
        }
      </div>
    </>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  errorMessage: PropTypes.string,
  maxLength: PropTypes.string,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
}

InputText.defaultProps = {
  readOnly: false,
  type: 'text',
  disabled: false
}

export default InputText;
