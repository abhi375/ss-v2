export default function Button({
  title,
  size,
  backgroundClass,
  foregroundClass,
}) {
  return (
    <button
      className={`text-sm px-6 py-2 rounded-full 
      ${size === "large" && "text-lg"}
      ${backgroundClass ? backgroundClass : "bg-accent"}
      ${foregroundClass ? foregroundClass : "text-white"}
    `}
    >
      {title}
    </button>
  );
}
