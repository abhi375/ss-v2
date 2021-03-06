import { motion } from "framer-motion";
import { HoverArrowIcon } from "./Icons";

export default function Button({
  title,
  size,
  backgroundClass,
  foregroundClass,
  onClick,
  disabled,
  fullWidth,
  type,
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      type={type && type}
      className={` rounded-full focus:outline-none font-semibold flex items-center justify-center group
      ${size === "large" ? "px-6 py-2.5 text-base" : "px-4 py-1.5 text-[15px]"}
      ${backgroundClass ? backgroundClass : "bg-accent"}
      ${foregroundClass ? foregroundClass : "text-white"}
      ${fullWidth && "w-full"}

    `}
      onClick={onClick && onClick}
      disabled={disabled && disabled}
    >
      <span
        className={`inline-block ${
          size === "large" ? "text-lg" : "text-[15px]"
        }`}
      >
        {title}
      </span>
      <HoverArrowIcon />
    </motion.button>
  );
}
