/* eslint-disable react/prop-types */

/* 
How to Use:
- Basic props: type, name, id, onChange, value, placeholder, label, disabled, readOnly
- Layout & Style Customization:
  - wrapperClass → Wrapper div for label, input, helper text, and error text
  - labelClass → Custom label styling
  - helperClass → Custom helper text styling
  - errorClass → Custom error styling
- Error Handling:
  - error → Custom error message
  - showError → State that enables when form submission fails
- Validation Features:
  - pattern → Custom regex validation
  - minLength / maxLength → Control character limits
  - min / max → Set numeric or date range limits
  - inputMode → Improve mobile keyboard behavior
  - hideNumberArrows → Removes up/down arrows from number inputs
  - Prevent Alphabet Input in `type="tel"`
*/

function Input({
  type = "text",
  name,
  id,
  onChange,
  value,
  placeholder,
  label,
  disabled = false,
  readOnly = false,
  required = false,
  showError = false,
  helperText,
  error,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  key,
  inputMode,
  hideNumberArrows = true, //  Removes number input arrows by default
  wrapperClass = "flex flex-col gap-1 w-full max-w-[300px]",
  className = "",
  labelClass = "font-medium text-gray-700",
  helperClass = "text-gray-500 text-sm",
  errorClass = "text-red-500 text-[12px] break-words w-full",
}) {
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
    <div className={`${wrapperClass}`}>
      {/* Label */}
      {label && (
        <label htmlFor={id} className={`${labelClass} hover:cursor-pointer`}>
          {label} {required && <span className="text-red-500">*</span>}
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
        key={key}
        pattern={
          type === "tel" ? "[0-9]*" : pattern //  Only allows digits in "tel"
        }
        minLength={type === "tel" ? 10 : minLength} //  Min 10 digits for phone
        maxLength={type === "tel" ? 15 : maxLength} //  Max 15 digits for phone
        min={min}
        max={max}
        inputMode={type === "tel" ? "numeric" : inputMode} //  Ensures only numeric keyboard for tel
        onInput={
          type === "tel"
            ? (e) => (e.target.value = e.target.value.replace(/\D/g, ""))
            : undefined
        } //  Blocks non-numeric input
        // tailwind for input
        className={`border-2 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 w-full
              ${showError && error ? "border-red-500" : "border-gray-300"}
              ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
              ${readOnly ? "bg-gray-50" : ""}
              ${
                type === "number" && hideNumberArrows
                  ? "appearance-none custom-number"
                  : ""
              }
              ${className}`}
      />

      {/* Fixed Layout for Error & Helper Text */}
      <div className="min-h-[28px] max-w-[300px] w-full">
        {helperText && !showError && (
          <p className={`${helperClass} truncate`}>{helperText}</p>
        )}
        {error && showError && <p className={errorClass}>{error}</p>}
      </div>

      {/* Custom CSS to Hide Number Arrows */}
      <style>
        {`
            /*  Removes number input spinner arrows */
            .custom-number::-webkit-outer-spin-button,
            .custom-number::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            .custom-number {
              -moz-appearance: textfield; /* Firefox */
            }
          `}
      </style>
    </div>
  );
}

export default Input;
