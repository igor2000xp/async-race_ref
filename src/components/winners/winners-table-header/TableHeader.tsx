import React, {useState} from "react";
import styles from './TableHeader.module.css'

interface ITableHeader {
    setSorting: ({}: {isASC: string, type: string}) => void
}

const TableHeader: React.FC<ITableHeader> = ({setSorting}) => {
    const [isACS, setIsASC] = useState<boolean>(true);

    const sorting = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const field = event.currentTarget.textContent?.toLowerCase();
        setSorting({
            isASC: isACS ? 'ASC' : 'DESC',
            type: field as string,
        });
        setIsASC(!isACS);
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