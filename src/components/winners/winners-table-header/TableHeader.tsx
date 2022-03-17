import React, {useState} from "react";
import styles from './TableHeader.module.css'
import {sortingASC, sortingDESC, SortingType} from "../../../constantsAPI/constantsAPI";

interface ITableHeader {
    setSorting: ({}: {type: SortingType, order: string}) => void
}

const TableHeader: React.FC<ITableHeader> = ({setSorting}) => {
    const [isACS, setIsASC] = useState<boolean>();

    const sorting = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const field = event.currentTarget.textContent?.toLowerCase();
        setSorting({
            order: isACS ? sortingASC : sortingDESC,
            type: field as SortingType,
        });
        setIsASC(!isACS);
    }

    return (
        <thead className={styles.wrapper}>
        <tr>
            <th>NAME</th>
            <th />
            <th>
                <button onClick={sorting}>{SortingType.id.toUpperCase()}</button>
            </th>
            <th>
                <button onClick={sorting}>{SortingType.wins.toUpperCase()}</button>
            </th>
            <th>
                <button onClick={sorting}>{SortingType.time.toUpperCase()}</button>
            </th>
        </tr>
        </thead>
    );
}

export default TableHeader;