import React from "react";
import styles from './TableHeader.module.css'
import {sortingASC, sortingDESC} from "../../../constantsAPI/constantsAPI";

const TableHeader = () => {

    const sorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
    }

    return (
        <thead>
        <tr className={styles.wrapper}>
            <th>Id</th>
            <th>Name</th>
            <th>
                <select onChange={sorting}>
                    <option defaultChecked value={sortingASC}>ascending</option>
                    <option value={sortingDESC}>descending</option>
                </select>
            </th>
            <th>Wins</th>
            <th>Time</th>
        </tr>
        </thead>
    );
}

export default TableHeader;