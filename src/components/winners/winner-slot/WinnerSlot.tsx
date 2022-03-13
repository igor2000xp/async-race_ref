import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./WinnerSlot.module.css";
import { ReactComponent as Logo } from '../../UI/GarageComponent/carsImg/auto.svg';

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
            <Logo width={100} height={50} fill={data?.color} stroke='white' strokeWidth={100}/>
            <div>Wins: {data?.wins}</div>
            <div>Time: {data?.time}.s</div>
        </li>
    );
};

export default WinnerSlot;