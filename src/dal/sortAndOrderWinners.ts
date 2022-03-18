export default function sortAndOrderWinners(sort: string = 'wins', order: string = 'ASC'): string {
  return `&_sort=${sort}&_order=${order}`;
}