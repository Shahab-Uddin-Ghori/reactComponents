/* eslint-disable react/prop-types */

function Input({
  type = "text",
  name,
  id,
  className = "",
  onChange,
  value,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  helperText,
  label,
  error,
  labelStyle = "font-medium text-gray-700",
  helperTextStyle = "text-gray-500 text-sm",
}) {
  // Enum for allowed input types
  const InputEnum = {
    text: "text",
    email: "email",
    password: "password",
    number: "number",
    tel: "tel",
    url: "url",
    date: "date",
    datetimeLocal: "datetime-local",
  };

  return (
    <div className="flex flex-col gap-1">
      {/* label if provided */}
      {label && (
        <label htmlFor={id} className={`${labelStyle}`}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {/* Input Field */}
      <input
        type={InputEnum[type] || "text"}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className={`border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300
            ${error ? "border-red-500" : "border-gray-300"}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
            ${readOnly ? "bg-gray-50" : ""}
            ${className}`}
      />
      {/* Helper Text */}
      {helperText && !error && (
        <p className={`${helperTextStyle}`}>{helperText}</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
