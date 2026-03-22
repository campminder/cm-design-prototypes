import React, { useState } from 'react';
import clsx from 'clsx';
import { Eye as VisibilityIcon, EyeOff as VisibilityOffIcon } from 'lucide-react';
import './TextInput.css';

export const TextInput = React.forwardRef(({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  readOnly = false,
  value,
  onChange,
  onBlur,
  type = 'text',
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className={clsx('cm-text-input', { 'cm-text-input--error': error, 'cm-text-input--disabled': disabled, 'cm-text-input--readonly': readOnly })}>
      {label && <label className="cm-text-input__label">{label}</label>}
      <div className="cm-text-input__wrapper">
        <input
          className={clsx('cm-text-input__field', { 'cm-text-input__field--has-toggle': isPassword })}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        {isPassword && (
          <button
            type="button"
            className="cm-text-input__toggle"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <VisibilityOffIcon size={20} />
            ) : (
              <VisibilityIcon size={20} />
            )}
          </button>
        )}
      </div>
      {error && <span className="cm-text-input__error">{error}</span>}
      {!error && helperText && <span className="cm-text-input__helper">{helperText}</span>}
    </div>
  );
});

TextInput.displayName = 'TextInput';
