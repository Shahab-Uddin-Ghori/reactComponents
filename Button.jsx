/* eslint-disable react/prop-types */

function Button({
  title,
  children,
  type = "button",
  icon,
  iconOrder,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  size = "md",
  img,
  imgOrder,
  imgWidth = "30",
  alt = "Image Button",
}) {
  const baseStyles =
    "font-medium rounded-md transition duration-300 focus:outline-none flex items-center justify-center gap-2";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-2 text-lg",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer"
      } ${baseStyles} ${sizeStyles[size]} ${className}`}
    >
      {iconOrder === "left" && icon}
      {/* for svg, img render */}
      {imgOrder === "left" && img && (
        <img src={img} width={imgWidth} alt={alt} />
      )}
      {title}
      {children}
      {imgOrder === "right" && img && (
        <img src={img} width={imgWidth} alt={alt} />
      )}
      {iconOrder === "right" && icon}
    </button>
  );
}

export default Button;
