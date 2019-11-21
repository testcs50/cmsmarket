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
            <div
                onClick={
                    () => {

                        const sortType = 'works_count';
                        const sortDesc = data.sorting.sort === sortType ? desc : true;

                        dispatch(sorting(sortType, sortDesc));
                        dispatch(sortInstruments(data.data.current_page, sortType, sortDesc))
                    }
                }
                style={
                    data.sorting
                    ?
                    (data.sorting.sort === 'works_count')
                    ?
                    { color: 'rgba(255, 0, 0, .4)' }
                    :
                    { color: 'rgba(0, 0, 0, .4)' }
                    :
                    { color: 'rgba(0, 0, 0, .4)' }
                }
            >
                Проекты &#8194; 
                {
                    (data.sorting && data.sorting.sort === 'works_count')
                    ?
                    (data.sorting.desc)
                    ?
                    <span>&#9660;</span>
                    :
                    <span>&#9650;</span>
                    :
                    undefined
                }
            </div>
            <div
                onClick={
                    () => {

                        const sortType = 'partners_count';
                        const sortDesc = data.sorting.sort === sortType ? desc : true;

                        dispatch(sorting(sortType, sortDesc));
                        dispatch(sortInstruments(data.data.current_page, sortType, sortDesc))
                    }
                }
                style={
                    data.sorting
                    ?
                    (data.sorting.sort === 'partners_count')
                    ?
                    { color: 'rgba(255, 0, 0, .4)' }
                    :
                    { color: 'rgba(0, 0, 0, .4)' }
                    :
                    { color: 'rgba(0, 0, 0, .4)' }
                }
            >
                Партнеры &#8194; 
                {
                    (data.sorting && data.sorting.sort === 'partners_count')
                    ?
                    (data.sorting.desc)
                    ?
                    <span>&#9660;</span>
                    :
                    <span>&#9650;</span>
                    :
                    undefined
                }
            </div>
            <div
                    onClick={
                    () => {

                        const sortType = 'rate';
                        const sortDesc = data.sorting.sort === sortType ? desc : true;

                        dispatch(sorting(sortType, sortDesc));
                        dispatch(sortInstruments(data.data.current_page, sortType, sortDesc))
                    }
                }
                style={
                    data.sorting
                    ?
                    (data.sorting.sort === 'rate')
                    ?
                    { color: 'rgba(255, 0, 0, .4)' }
                    :
                    { color: 'rgba(0, 0, 0, .4)' }
                    :
                    { color: 'rgba(0, 0, 0, .4)' }
                }
            >
                Оценка Пользователей &#8194; 
                {
                    (data.sorting && data.sorting.sort === 'rate')
                    ?
                    (data.sorting.desc)
                    ?
                    <span>&#9660;</span>
                    :
                    <span>&#9650;</span>
                    :
                    undefined
                }
            </div>
            <div>Сравнить</div>
        </div>
    );
}

export default Sorting;