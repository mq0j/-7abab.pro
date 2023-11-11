export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-SA").format(date);
}
