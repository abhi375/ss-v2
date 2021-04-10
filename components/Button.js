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
      type={type && type}
      className={`text-base rounded-full transition duration-300  focus:outline-none font-semibold flex place-items-center group hover:shadow-inset
      ${size === "large" ? "px-6 py-3" : "px-4 py-1.5"}
      ${backgroundClass ? backgroundClass : "bg-accent"}
      ${foregroundClass ? foregroundClass : "text-white"}
      ${fullWidth && "w-full"}

    `}
      onClick={onClick && onClick}
      disabled={disabled && disabled}
    >
      <span
        className={`inline-block mr-2 ${
          size === "large" ? "text-lg" : "text-base"
        }`}
      >
        {title}
      </span>
      <HoverArrowIcon />
    </motion.button>
  );
}
