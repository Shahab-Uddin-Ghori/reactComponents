/* eslint-disable react/prop-types */

/* 
 How to Use:
- Basic Props: name, id, checked, onChange, disabled, required
- Custom Error Handling:
  - error → Custom error message
  - showError → Enables error message on form submission
- Customizable UI:
  - wrapperClass → Controls layout of the checkbox & label
  - labelClass → Custom label styling
  - errorClass → Custom error styling
*/

function Checkbox({
  name,
  id,
  checked,
  onChange,
  disabled = false,
  required = false,
  label,
  error,
  showError = false,
  wrapperClass = "flex items-center gap-2",
  labelClass = "font-medium text-gray-700",
  errorClass = "text-red-500 text-[12px] break-words",
  labelOrder = "left",
}) {
  return (
    <div className="flex flex-col">
      {/* Checkbox & Label Wrapper */}
      <div className={wrapperClass}>
        {/* Label */}
        {label && labelOrder === "left" && (
          <label htmlFor={id} className={labelClass}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        {/* Checkbox Input */}
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-checked={checked}
          className={`w-5 h-5 border-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300
              ${
                checked
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300"
              }
              ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />

        {/* Label */}
        {label && labelOrder === "right" && (
          <label htmlFor={id} className={labelClass}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
      </div>

      {/* Error Message (Below the Checkbox) */}
      {error && showError && <p className={errorClass}>{error}</p>}
    </div>
  );
}

export default Checkbox;
