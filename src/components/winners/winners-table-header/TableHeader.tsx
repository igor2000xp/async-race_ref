import React, {useState} from "react";
import styles from './TableHeader.module.css'
import {SortingOrder, SortingType} from "../../../constantsAPI/constantsAPI";
import {useDispatch} from "react-redux";
import {setSortingOption} from "../../../bll/reducer/actions";

const TableHeader = () => {
    const [isACS, setIsASC] = useState<boolean>();
    const [currentButton, setCurrentButton] = useState<string>()
    const dispatch = useDispatch()


    const sorting = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const element = event.currentTarget;
        const field = element.textContent?.toLowerCase();
        dispatch(setSortingOption({
            order: isACS ? SortingOrder.ASC : SortingOrder.DESC,
            type: field as SortingType,
        }))
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