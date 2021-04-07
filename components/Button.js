export default function Button({
  title,
  size,
  backgroundClass,
  foregroundClass,
  onClick,
  disabled,
  fullWidth,
}) {
  return (
    <button
      className={`text-sm px-6 py-2 rounded-full 
      ${size === "large" && "text-lg px-9 py-3"}
      ${backgroundClass ? backgroundClass : "bg-accent"}
      ${foregroundClass ? foregroundClass : "text-white"}
      ${fullWidth && "w-full"}
    `}
      onClick={onClick && onClick}
      disabled={disabled && disabled}
    >
      {title}
    </button>
  );
}
