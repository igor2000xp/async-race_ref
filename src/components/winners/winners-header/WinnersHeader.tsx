import style from "./WinnersHeader.module.css"
import React from "react";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../../bll/store";

const WinnersHeader = () => {
    const totalWinners = useSelector<RootStoreType, number>(state => state.reducer.winnerTotalCount);
    const currentPage = useSelector<RootStoreType, number>(state => state.reducer.winnerPage);

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Winners total: {totalWinners}</h3>
            <h3 className={style.title}>Page: {currentPage}</h3>
        </div>
    )
};

export default WinnersHeader