import {limitPageWinners} from "../constantsAPI/constantsAPI";

export default function sortAndOrderWinners (sort: string = 'wins', order: string = 'DESC') {
  return `&_limit=${limitPageWinners}&_sort=${sort}&_${order}`;
}