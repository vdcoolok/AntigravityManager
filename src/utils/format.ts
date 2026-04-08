/**
 * Formats a date string to a short locale format (e.g., "Jan 15")
 * @param expiryDate - ISO date string or date-like string
 * @returns Formatted date string or original string if parsing fails
 */
export function formatCreditsExpiry(expiryDate: string): string {
  if (!expiryDate) return '';
  try {
    const date = new Date(expiryDate);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch {
    return expiryDate;
  }
}
