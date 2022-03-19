import React, {useEffect} from 'react';
import WinnerSlot from './winner-slot/WinnerSlot';
import style from './Winners.module.css';
import Header from '../UI/header';
import {useDispatch, useSelector} from "react-redux";
import WinnersHeader from './winners-header/WinnersHeader';
import {RootStoreType} from '../../bll/store';
import {getWinnerCarsThunk} from '../../bll/reducer/thunk';
import {ISortingOptions, IWinner} from '../../types/typesAPI';
import Footer from '../UI/Footer';
import { WINNER } from '../../bll/reducer/actionConstant';
import TableHeader from './winners-table-header/TableHeader';

const Winners = () => {
    const currentPage = useSelector<RootStoreType, number>(state => state.reducer.winnerPage);
    const winnerCars = useSelector<RootStoreType, Array<IWinner> | null>( state => state.reducer.winnerCars);
    const sortingOptions = useSelector<RootStoreType, ISortingOptions>(state => state.reducer.sortingOptions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWinnerCarsThunk(currentPage, sortingOptions));
    }, [currentPage, sortingOptions]);

    return (<div className={style.wrapper}>
        <Header />
        <WinnersHeader />
        <table className={style.tableWrapper}>
            <TableHeader type={sortingOptions.type} order={sortingOptions.order}/>
            <tbody>
            {winnerCars?.map(winner => <WinnerSlot
                key={String(winner.id)}
                id={winner.id}
                wins={winner.wins}
                time={winner.time}
            />)}
            </tbody>
        </table>
        <Footer switchPage={WINNER} />
    </div>);
};

export default Winners;
