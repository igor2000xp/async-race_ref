export default function sortAndOrderWinners (sort: string = 'wins', order: string = 'ASC') {
  return `&_sort=${sort}&_order=${order}`;
}