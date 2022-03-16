import React from "react";
import styles from './TableHeader.module.css'

const TableHeader = () => {
    return (
        <thead>
            <tr className={styles.wrapper}>
                <th>Id</th>
                <th>Name</th>
                <th />
                <th>Wins</th>
                <th>Time</th>
            </tr>
        </thead>
    );
}

export default TableHeader;