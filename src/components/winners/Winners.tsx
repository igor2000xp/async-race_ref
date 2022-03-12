import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WinnerSlot from './winer-slot/WinnerSlot';
// @ts-ignore
import style from './Winners.module.css';
import Header from '../UI/header';

interface IWinner {
    id: number,
    wins: number,
    time: number,
}

const Winners = () => {

    const [data, setData] = useState<Array<IWinner>>([])

    useEffect(() => {
            axios.get<Array<IWinner>>('http://localhost:3000/winners')
                .then(res =>{
                    setData(res.data)
                });
    }, [])

    return (<div className={style.wrapper}>
        <Header />
        <h3 className={style.title}>Winners</h3>
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