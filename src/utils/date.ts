export function formatPeriod(startDate: Date, endDate?: Date) {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  const start = startDate.toLocaleDateString("en-US", options);
  const end = endDate
    ? endDate.toLocaleDateString("en-US", options)
    : "Present";
  return `${start} - ${end}`;
}

export function calculateDuration(
  startDate: Date,
  endDate?: Date,
): string | null {
  if (!endDate) return null;

  const start = new Date(startDate);
  const end = new Date(endDate);

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `(${months} mo${months !== 1 ? "s" : ""})`;
  } else if (months === 0) {
    return `(${years} yr${years !== 1 ? "s" : ""})`;
  } else {
    return `(${years} yr${years !== 1 ? "s" : ""} ${months} mo${months !== 1 ? "s" : ""})`;
  }
}

export function calculateProjectDuration(
  startDate: Date,
  endDate?: Date,
): string {
  const end = endDate || new Date();
  const months =
    (end.getFullYear() - startDate.getFullYear()) * 12 +
    (end.getMonth() - startDate.getMonth());

  if (months < 1) return "Less than a month";
  if (months === 1) return "1 month";
  if (months < 12) return `${months} months`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) return years === 1 ? "1 year" : `${years} years`;
  return `${years} year${years > 1 ? "s" : ""}, ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
}
