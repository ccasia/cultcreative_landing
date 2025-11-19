import { calculateReadingTime } from "./readingTime";

/**
 * Extracts plain text from a content string that may contain JSX-like formatting
 * This is useful for calculating reading time from article content
 * @param content - The content string (can include JSX elements as strings)
 * @returns Plain text extracted from the content
 */
export const extractPlainText = (content: string): string => {
  if (!content || typeof content !== "string") {
    return "";
  }

  // Remove JSX tags/elements
  let text = content
    .replace(/<[^>]*>/g, "") // Remove XML/HTML tags
    .replace(/\{[^}]*\}/g, "") // Remove JSX expressions
    .replace(/&nbsp;/g, " ") // Replace HTML entities
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();

  return text;
};

/**
 * Calculates reading time from article content strings
 * Join all content pieces and calculate reading time
 * @param contentParts - Array of content strings or a single string
 * @param wordsPerMinute - Average words per minute (default: 200)
 * @returns Formatted reading time string (e.g., "5 min")
 */
export const calculateReadingTimeFromContent = (
  contentParts: string | string[],
  wordsPerMinute: number = 200
): string => {
  const contents = Array.isArray(contentParts) ? contentParts : [contentParts];
  const combinedContent = contents.join(" ");
  const plainText = extractPlainText(combinedContent);
  return calculateReadingTime(plainText, wordsPerMinute);
};
