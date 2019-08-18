export default function(date) {
  date = new Date(date);
  const formattedDate = date
    .toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .replace(/ /g, ' ');

  return formattedDate;
}
