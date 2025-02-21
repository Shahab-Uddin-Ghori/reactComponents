/* eslint-disable react/prop-types */

/* 
🔹 Button Component - A global, scalable, and reusable button component

Features:
- Supports text, icons, and images
- Customizable layout (icon & image positions)
- Different sizes and variants (primary, secondary, danger, etc.)
- Handles disabled states correctly
- Fully responsive & accessible

🔹 Props:
- title (string) → Button text
- children (ReactNode) → Additional elements inside the button
- type (string) → "button", "submit", "reset" (default: "button")
- icon (ReactNode) → Icon component (SVG, FontAwesome, etc.)
- iconOrder ("left" | "right") → Position of the icon (default: "left")
- onClick (function) → Click event handler
- variant ("primary" | "secondary" | "danger" | "success" | "outline") → Button style (default: "primary")
- disabled (boolean) → Disables button if true
- className (string) → Custom Tailwind classes
- size ("sm" | "md" | "lg") → Button size (default: "md")
- img (string) → Image source (for button icon/image)
- imgOrder ("left" | "right") → Position of the image (default: "left")
- imgWidth (string | number) → Image width (default: "30")
- alt (string) → Image alt text (default: "Image Button")
*/

function Button({
  title,
  children,
  type = "button",
  icon,
  iconOrder = "left",
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  size = "md",
  img,
  imgOrder = "left",
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
