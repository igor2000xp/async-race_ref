import React, {useEffect, useState} from 'react';
import axios from "axios";
// @ts-ignore
import styles from "./WinnerSlot.module.css";

interface IWinnerSlot {
    id: number,
    wins: number,
    time: number
}

interface ICar extends IWinnerSlot{
    name: string,
    color: string
}

const WinnerSlot = ({id, wins, time}: IWinnerSlot) => {

    const [data, setData] = useState<ICar>()

    useEffect(() => {
            axios.get(`http://localhost:3000/garage/${id}`)
                .then(res => {
                    setData({...res.data, wins, time});
                });
    }, [])

    return (
        <li className={styles.wrapper}>
            <div>Id: {data?.id}</div>
            <div>Name: {data?.name}</div>
            <div>Car template</div>
            <div>Wins: {data?.wins}</div>
            <div>Time: {data?.time}.s</div>
        </li>
    );
};

export default WinnerSlot;