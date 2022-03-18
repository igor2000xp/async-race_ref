import React, {useState} from 'react';
import styles from './TableHeader.module.css'
import {SortingOrder, SortingType} from '../../../constantsAPI/constantsAPI';
import {useDispatch} from 'react-redux';
import {setSortingOption} from '../../../bll/reducer/actions';

interface ITableHeader {
    type: SortingType
}

const TableHeader: React.FC<ITableHeader> = ({type}) => {
    const [isACS, setIsASC] = useState<boolean>();
    const [currentType, setCurrentType] = useState<SortingType>(type);
    const dispatch = useDispatch();

    const sorting = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const element = event.currentTarget;
        const type = element.textContent?.toLowerCase() as SortingType;
        dispatch(setSortingOption({
            order: isACS ? SortingOrder.ASC : SortingOrder.DESC,
            type,
        }));
        setIsASC(!isACS);
        setCurrentType(type);
    }

    const fields = [];

    for (let type in SortingType) {
        fields.push(type);
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
                            className={currentType === el ? styles.checkedButton : styles.button}
                        >
                            {el.toUpperCase()}
                        </button>
                        {
                            currentType === el
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