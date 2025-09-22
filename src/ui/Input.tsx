// components/Input/Input.tsx
import React, { ForwardedRef, forwardRef } from 'react';

export interface InputProps {
  // 🏷️ Grundlegende Props
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  id?: string;
  name: string;
  value?: string | number;
  defaultValue?: string;
  placeholder?: string;
  
  // 🎨 Styling & Varianten
  variant?: 'default' | 'filled' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fullWidth?: boolean;
  
  // 📝 Label & Beschreibung
  label?: string;
  helperText?: string;
  error?: string;
  
  // 🔍 Icons
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  
  // 📱 States
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  
  // 🎯 Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  // 🎨 Customization
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
  
  // ♿ Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      // 🏷️ Grundlegende Props
      type = 'text',
      id,
      name,
      value,
      defaultValue,
      placeholder,
      
      // 🎨 Styling & Varianten
      variant = 'default',
      size = 'md',
      rounded = 'md',
      fullWidth = false,
      
      // 📝 Label & Beschreibung
      label,
      helperText,
      error,
      
      // 🔍 Icons
      prefixIcon,
      suffixIcon,
      
      // 📱 States
      disabled = false,
      readOnly = false,
      required = false,
      autoFocus = false,
      autoComplete = 'off',
      
      // 🎯 Events
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      
      // 🎨 Customization
      className = '',
      inputClassName = '',
      labelClassName = '',
      helperClassName = '',
      
      // ♿ Accessibility
      ariaLabel,
      ariaDescribedBy,
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    // Generiere eine eindeutige ID falls keine provided
    const inputId = id || `input-${name}-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    // CSS Klassen basierend auf Props
    const containerClasses = [
      'input-container',
      fullWidth && 'input-container--full-width',
      className,
    ].filter(Boolean).join(' ');

    const inputWrapperClasses = [
      'input-wrapper',
      `input-wrapper--${variant}`,
      `input-wrapper--${size}`,
      `input-wrapper--rounded-${rounded}`,
      disabled && 'input-wrapper--disabled',
      readOnly && 'input-wrapper--readonly',
      error && 'input-wrapper--error',
      prefixIcon && 'input-wrapper--has-prefix',
      suffixIcon && 'input-wrapper--has-suffix',
    ].filter(Boolean).join(' ');

    const inputClasses = [
      'input',
      `input--${size}`,
      inputClassName,
    ].filter(Boolean).join(' ');

    const labelClasses = [
      'input-label',
      required && 'input-label--required',
      labelClassName,
    ].filter(Boolean).join(' ');

    const helperClasses = [
      'input-helper',
      error && 'input-helper--error',
      helperClassName,
    ].filter(Boolean).join(' ');

    return (
      <div className={containerClasses}>
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
          </label>
        )}

        {/* Input Wrapper mit Icons */}
        <div className={inputWrapperClasses}>
          {/* Prefix Icon */}
          {prefixIcon && (
            <span className="input-icon input-icon--prefix">
              {prefixIcon}
            </span>
          )}

          {/* Input Element */}
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            className={inputClasses}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy || (error ? errorId : helperId)}
            aria-invalid={!!error}
            aria-required={required}
          />

          {/* Suffix Icon */}
          {suffixIcon && (
            <span className="input-icon input-icon--suffix">
              {suffixIcon}
            </span>
          )}
        </div>

        {/* Helper Text oder Error Message */}
        {(helperText || error) && (
          <span
            id={error ? errorId : helperId}
            className={helperClasses}
            role={error ? 'alert' : undefined}
          >
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;