import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges them using tailwind-merge.
 *
 * The `clsxm` function takes any number of arguments which can be a string,
 * array, object, or null/undefined. It leverages the functionality of clsx
 * to concatenate class names based on the truthiness of the inputs. After
 * generating the concatenated class string, it uses tailwind-merge to merge
 * any Tailwind CSS utility classes into a final optimized class string.
 * This is especially useful in React projects where conditional class names
 * are frequently used along with Tailwind CSS for styling components.
 *
 * @param {...ClassValue} classes - A list of class values (string, array, object,
 *                                  or null/undefined). These classes are combined
 *                                  and then optimized for Tailwind CSS.
 *
 * @returns {string} - The optimized string of class names ready to be used in a
 *                     className attribute in JSX.
 *
 * @example
 * // Basic usage
 * clsxm('text-center', 'md:text-left');
 *
 * // With conditional classes
 * clsxm('text-center', isLarge && 'text-lg', { 'bg-red-500': isError });
 *
 * // Output (assuming isLarge is true and isError is false)
 * // 'text-center text-lg'
 */
export default function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
