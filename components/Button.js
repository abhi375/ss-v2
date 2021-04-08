import { motion } from "framer-motion";

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
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`text-sm px-6 py-2 rounded-full transition duration-300 hover:shadow-inset focus:outline-none
      ${size === "large" && "text-lg px-9 py-3"}
      ${backgroundClass ? backgroundClass : "bg-accent"}
      ${foregroundClass ? foregroundClass : "text-white"}
      ${fullWidth && "w-full"}

    `}
      onClick={onClick && onClick}
      disabled={disabled && disabled}
    >
      {title}
    </motion.button>
  );
}
