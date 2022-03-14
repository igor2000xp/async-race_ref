import React, {useEffect} from 'react';
import WinnerSlot from './winner-slot/WinnerSlot';
import style from './Winners.module.css';
import Header from '../UI/header';
import {useDispatch, useSelector} from "react-redux";
import WinnersHeader from "./winners-header/WinnersHeader";
import {RootStoreType} from "../../bll/store";
import {getWinnerCarsThunk} from "../../bll/reducer/thunk";
import {IWinner} from "../../types/typesAPI";
import Footer from "../UI/Footer";
import { WINNER } from '../../bll/reducer/actionConstant';

const Winners = () => {
    const currentPage = useSelector<RootStoreType, number>(state => state.reducer.winnerPage);
    const winnerCars = useSelector<RootStoreType, Array<IWinner> | null>( state => state.reducer.winnerCars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWinnerCarsThunk(currentPage));
    }, [currentPage]);

    return (<div className={style.wrapper}>
        <Header />
        <WinnersHeader />
        <ul className={style.wrapper}>
            {winnerCars?.map(winner => <WinnerSlot
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
