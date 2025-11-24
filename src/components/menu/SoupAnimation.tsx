import { motion } from "framer-motion";

export type AnimationStyle = "cartoon" | "realistic" | "minimal" | "sticker";

interface SoupAnimationProps {
  soupName: string;
  style?: AnimationStyle;
  className?: string;
}

export const SoupAnimation = ({ 
  soupName, 
  style = "cartoon",
  className = "" 
}: SoupAnimationProps) => {
  // Soup animations disabled - images removed
  return null;
};
