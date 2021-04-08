import React from "react";

export function Form({ children, onSubmit }) {
  return (
    <form className={``} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export function FormField({ children, full, className }) {
  return <div>{children}</div>;
}

export function Input({
  textarea,
  label,
  placeholder,
  name,
  value,
  error,
  errorText,
  onChange,
  onBlur,
  isRequired,
  autoFocus,
}) {
  const Element = textarea ? "textarea" : "input";
  return (
    <div className="relative grid grid-cols-1 w-full">
      <label htmlFor={name} className="text-[14px] mb-1">
        {isRequired && <span>*&nbsp;</span>}
        {label}
      </label>
      <Element
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        style={{ resize: "none" }}
        autoFocus={autoFocus && autoFocus}
        className={`${
          error ? "border-red-600" : "border-gray-200"
        } w-full px-2 py-2 border border-solid  rounded-md`}
      />
      {error && (
        <p className="absolute -bottom-6 text-[13px] text-red-600">
          {errorText}
        </p>
      )}
    </div>
  );
}
