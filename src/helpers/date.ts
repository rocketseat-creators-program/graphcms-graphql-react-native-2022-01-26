export const stringToDate = (dateString: string) => {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);
  const dia =
    date.getDate().toString().length == 1
      ? '0' + date.getDate().toString()
      : date.getDate().toString();
  const mes =
    (date.getMonth() + 1).toString().length === 1
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const ano = date.getFullYear();
  return `${dia}/${mes}/${ano}`;
};
