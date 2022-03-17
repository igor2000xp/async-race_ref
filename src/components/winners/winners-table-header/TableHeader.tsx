import React, {useState} from "react";
import styles from './TableHeader.module.css'
import {sortingASC, sortingDESC, SortingType} from "../../../constantsAPI/constantsAPI";

interface ITableHeader {
    setSorting: ({}: {type: SortingType, order: string}) => void
}

const TableHeader: React.FC<ITableHeader> = ({setSorting}) => {
    const [isACS, setIsASC] = useState<boolean>();
    const [currentButton, setCurrentButton] = useState<string>()

    const sorting = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const element = event.currentTarget;
        const field = element.textContent?.toLowerCase();
        setSorting({
            order: isACS ? sortingASC : sortingDESC,
            type: field as SortingType,
        });
        setIsASC(!isACS);
        setCurrentButton(field);
    }

    const fields = [];

    for (let type in SortingType) {
        fields.push(type)
    }

    return (
        <thead className={styles.wrapper}>
        <tr>
            <th>NAME</th>
            <th />
            {fields.map( (el) => {
                return (
                    <th key={el}>
                        <button
                            onClick={sorting}
                            className={currentButton === el ? styles.checkedButton : styles.button}
                        >
                            {el.toUpperCase()}
                        </button>
                        {
                            currentButton === el
                                ? isACS
                                    ? <> &uarr;</>
                                    : <> &darr;</>
                                : <></>
                        }
                    </th>
                )
                })}
        </tr>
        </thead>
    );
}

export default TableHeader;