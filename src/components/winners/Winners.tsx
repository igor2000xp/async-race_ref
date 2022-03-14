import React, {useEffect, useState} from 'react';
import WinnerSlot from './winner-slot/WinnerSlot';
import style from './Winners.module.css';
import Header from '../UI/header';
import Footer from "../UI/Footer";
import { WINNER } from '../../bll/reducer/actionConstant';
import {getWinners} from "../../dal/WinnersAPI";
import {useDispatch} from "react-redux";
import {setWinnerCars} from "../../bll/reducer/actions";
import WinnersHeader from "./winners-header/WinnersHeader";

interface IWinner {
    id: number,
    wins: number,
    time: number,
}

const Winners = () => {

    const [data, setData] = useState<Array<IWinner>>([])
    const dispatch = useDispatch()

    useEffect(() => {
        getWinners()
            .then(res => {
                const {totalCount, winners} = res;
                setData(winners);
                dispatch(setWinnerCars(totalCount));
            })
    }, [])

    return (<div className={style.wrapper}>
        <Header />
        <WinnersHeader />
        <ul className={style.wrapper}>
            {data?.map(winner => <WinnerSlot
                key={String(winner.id)}
                id={winner.id}
                wins={winner.wins}
                time={winner.time}
            />)}
        </ul>
        <Footer switchPage={WINNER} />
    </div>);
};

export default Winners;
