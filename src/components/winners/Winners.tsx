import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WinnerSlot from './winer-slot/WinnerSlot';
// @ts-ignore
import style from './Winners.module.css';
import Header from '../UI/header';
import {getWinners} from "../../dal/WinnersAPI";

interface IWinner {
    id: number,
    wins: number,
    time: number,
}

const Winners = () => {

    const [data, setData] = useState<Array<IWinner>>([])
    const [totalWinners, setTotalWinners] = useState(0)

    useEffect(() => {
        getWinners()
            .then(res => {
                const {totalCount, winners} = res;
                setData(winners);
                setTotalWinners(totalCount);
            })
    }, [])

    return (<div className={style.wrapper}>
        <Header />
        <h3 className={style.title}>Winners total: {totalWinners}</h3>
        <ul className={style.wrapper}>
            {data?.map(winner => <WinnerSlot
                key={String(winner.id)}
                id={winner.id}
                wins={winner.wins}
                time={winner.time}
            />)}
        </ul>
    </div>);
};

export default Winners;