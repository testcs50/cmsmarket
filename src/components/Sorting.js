import React from "react";
import { useDispatch } from 'react-redux';

import sortInstruments from '../actions/sortInstruments';
import sorting from '../actions/sorting';

const Sorting = props => {

    const dispatch = useDispatch();

    const data = props.data.data;
    const desc = data.sorting ? !data.sorting.desc : true;

    return (
        <div className="main__instruments-headers">
            <div>Название</div>
            <div onClick={
                () => {

                    const sortType = 'works_count';
                    const sortDesc = data.sorting.sort === sortType ? desc : true;

                    dispatch(sorting(sortType, sortDesc));
                    dispatch(sortInstruments(data.data.current_page, sortType, sortDesc))
                }
            }>
                Проекты
            </div>
            <div onClick={
                () => {

                    const sortType = 'partners_count';
                    const sortDesc = data.sorting.sort === sortType ? desc : true;

                    dispatch(sorting(sortType, sortDesc));
                    dispatch(sortInstruments(data.data.current_page, sortType, sortDesc))
                }
            }>
                Партнеры
            </div>
            <div onClick={
                () => {

                    const sortType = 'rate';
                    const sortDesc = data.sorting.sort === sortType ? desc : true;

                    dispatch(sorting(sortType, sortDesc));
                    dispatch(sortInstruments(data.data.current_page, sortType, sortDesc))
                }
            }>
                Оценка Пользователей
            </div>
            <div>Сравнить</div>
        </div>
    );
}

export default Sorting;