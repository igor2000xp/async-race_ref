import {instance} from './GarageAPI';
import {ISortingOptions, IWinner, IWinnerUpdate} from "../types/typesAPI";
import {limitPageWinners, winnersPath} from "../constantsAPI/constantsAPI";
import sortAndOrderWinners from "./sortAndOrderWinners";

export const createWinner = (winner: IWinner): Promise<IWinner> => {
    return instance.post(winnersPath,
        {winner},
        {headers: {'Content-Type': 'application/json'},})
        .then(res => res.data);
};

export const deleteWinner = (id: number): Promise<number> => {
    return instance.delete(`${winnersPath}/?id=${id}`,)
        .then(res => res.data)
        .catch(res => res.status);
}

export const getWinnerStatistic = (id: number): Promise<number> => {
    return instance.get(`${winnersPath}/?id=${id}`,)
        .then(res => res.status);
}

export const getWinner = (id: number): Promise<IWinner> => {
    return instance.get(`${winnersPath}/?id=${id}`,).then(res => res.data);
}

export const getWinners = (
    page: number,
    sorting: ISortingOptions
): Promise<{ totalCount: number , winners: IWinner[] }> => {
    return instance.get(
        `${winnersPath}?_page=${page}&_limit=${limitPageWinners}${sortAndOrderWinners(sorting.type, sorting.order)}`
    )
        .then(res => {
            const { headers, data } = res;
            const totalCount = Number(headers['x-total-count']);
            return { totalCount, winners: data }
        });
};

export const updateWinner = (id: number, winner: IWinnerUpdate): Promise<IWinner> => {
    return instance.put(`${winnersPath}/id=${id}`,
        {winner}
    ).then((res => res.data));
};
