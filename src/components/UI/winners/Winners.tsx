import React, {useEffect, useState} from 'react';
import WinnerSlot from "./winer-slot/WinnerSlot";
// @ts-ignore
import style from "./Winners.module.css";
import {getWinners} from "../../../dal/WinnersAPI";

interface IWinner {
    id: number,
    wins: number,
    time: number,
}

const Winners = () => {

    const [data, setData] = useState<Array<IWinner>>([])

    useEffect(() => {
        getWinners(0)
            .then(res => setData(res));
    }, [])

    return (<>
        <h3 className={style.title}>Winners</h3>
        <ul className={style.wrapper}>
            {data?.map(winner => <WinnerSlot
                key={String(winner.id)}
                id={winner.id}
                wins={winner.wins}
                time={winner.time}
            />)}
        </ul>
    </>);
};

export default Winners;