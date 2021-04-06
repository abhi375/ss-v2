export default function Button({ title, size }) {
  return (
    <button
      className={`text-sm px-6 py-2 bg-accent rounded-full text-white
      ${size === "large" && "text-lg"}
    `}
    >
      {title}
    </button>
  );
}
