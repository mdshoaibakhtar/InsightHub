
// Format Date in YYYY/MM/DD Format
export const formatDateToCA = (date: DateType) => {
  if (!date) return '';
  const d = date instanceof Date ? date : new Date(date.toString());
  return d.toLocaleDateString('en-CA');
};

// Format Date in MM/DD/YYYY Format
export const formatDateToUS = (date: DateType) => {
  if (!date) return '';
  const dateObj = date instanceof Date ? date : new Date(date.toString());
  return dateObj.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
};

// Format Date in "12th Nov 2025" Format
export const formatDateWithOrdinal = (date: DateType) => {
  if (!date) return '';
  const dateObj = date instanceof Date ? date : new Date(date.toString());
  const day = dateObj.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';
  const month = dateObj.toLocaleDateString('en-GB', { month: 'short' });
  const year = dateObj.getFullYear();
  return `${day}${suffix} ${month} ${year}`;
};
