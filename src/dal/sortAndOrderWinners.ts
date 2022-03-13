export default function sortAndOrderWinners (sort: string = 'wins', order: string = 'DESC') {
  return `&_sort=${sort}&_order=${order}`;
}