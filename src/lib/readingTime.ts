/**
 * Calculates the estimated reading time for a given text
 * @param text - The text content to calculate reading time for
 * @param wordsPerMinute - Average words per minute (default: 200)
 * @returns Formatted string with reading time (e.g., "5 min" or "1 min")
 */
export const calculateReadingTime = (
  text: string,
  wordsPerMinute: number = 200
): string => {
  if (!text || typeof text !== "string") {
    return "0 min";
  }

  // Count words by splitting on whitespace
  const words = text.trim().split(/\s+/).length;

  // Calculate minutes and round up
  const minutes = Math.ceil(words / wordsPerMinute);

  // Return formatted string
  return `${minutes} min`;
};

/**
 * Calculates reading time and returns additional metadata
 * @param text - The text content to calculate reading time for
 * @param wordsPerMinute - Average words per minute (default: 200)
 * @returns Object with reading time details
 */
export const getReadingTimeDetails = (
  text: string,
  wordsPerMinute: number = 200
) => {
  if (!text || typeof text !== "string") {
    return {
      minutes: 0,
      seconds: 0,
      words: 0,
      formatted: "0 min",
    };
  }

  const words = text.trim().split(/\s+/).length;
  const totalSeconds = (words / wordsPerMinute) * 60;
  const minutes = Math.ceil(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);

  return {
    minutes,
    seconds,
    words,
    formatted: `${minutes} min`,
  };
};
