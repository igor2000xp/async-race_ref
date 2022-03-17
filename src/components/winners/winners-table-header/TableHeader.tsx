import React from "react";
import styles from './TableHeader.module.css'

const TableHeader = () => {

    const sorting = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const field = event.currentTarget.textContent?.toLowerCase();
        console.log(field)
    }

    return (
        <thead className={styles.wrapper}>
        <tr>
            <th>NAME</th>
            <th />
            <th>
                <button onClick={sorting}>ID</button>
            </th>
            <th>
                <button onClick={sorting}>WINS</button>
            </th>
            <th>
                <button onClick={sorting}>TIME</button>
            </th>
        </tr>
        </thead>
    );
}

export default TableHeader;