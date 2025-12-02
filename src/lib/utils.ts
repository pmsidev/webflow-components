import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution.
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 *
 * @example
 * cn("px-4 py-2", "px-8") // → "py-2 px-8"
 * cn("text-red-500", isActive && "text-blue-500") // conditional
 * cn(baseClasses, className) // merging with external className prop
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
