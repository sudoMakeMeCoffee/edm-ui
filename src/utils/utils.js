export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${getOrdinal(day)} ${month} ${year}`;
}

export function formatTime(timeStr) {
  const [hourStr, minuteStr] = timeStr.split(':');
  const hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}.${String(minutes).padStart(2, '0')} ${period}`;
}

export function truncateStr(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}