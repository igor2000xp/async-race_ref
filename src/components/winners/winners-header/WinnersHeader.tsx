import {useSelector} from "react-redux";
import {RootStoreType} from "../../../bll/store";
import style from "./WinnersHeader.module.css"
import React from "react";

const WinnersHeader = () => {
    const totalWinners = useSelector<RootStoreType, number>( state => state.reducer.winnerCars);
    return (<div className={style.wrapper}>
        <h3 className={style.title}>Winners total: {totalWinners}</h3>
    </div>)
};

export default WinnersHeader