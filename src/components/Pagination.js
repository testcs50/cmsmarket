import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import getInstruments from '../actions/getInstruments';
import sortInstruments from '../actions/sortInstruments';

const Pagination = props => {

    const data = props.data.data;

    const input = useRef(null)
    const dispatch = useDispatch();

    const pageChanger = page => {
        if (page <= 1) return 1;
        else if (page >= 40) return 40;
        return page;
    }

    return (
        <div className="main__cms-pagination">
            <button
                className="main__cms-paging"
                disabled={ data.data.current_page === 1 }
                onClick={
                    () => {
                        const page = pageChanger(data.data.current_page - 1)
                        const action = data.sorting ? sortInstruments(page, data.sorting.sort, data.sorting.desc) : getInstruments(page);

                        dispatch(action)
                    }
                }
            >
                Пред.
            </button>
            <div className="main__cms-page-form-wrapper">
                <input
                    ref={input}
                    className="main__cms-page-form"
                    type="number"
                    min="1"
                    max="40"
                    step="1"
                    placeholder="Страница (1-40)"
                />
                <button
                    className="main__cms-page-button"
                    onClick={
                        () => {
                            const page = pageChanger(input.current.value)
                            const action = data.sorting ? sortInstruments(page, data.sorting.sort, data.sorting.desc) : getInstruments(page);

                            dispatch(action)
                        }
                    }
                >
                    Перейти
                </button>
            </div>
            <button
                className="main__cms-paging"
                disabled={ data.data.current_page === 40 }
                onClick={
                    () => {
                        const page = pageChanger(data.data.current_page + 1)
                        const action = data.sorting ? sortInstruments(page, data.sorting.sort, data.sorting.desc) : getInstruments(page);

                        dispatch(action)
                    }
                }
            >
                След.
            </button>
        </div>
    );
}

export default Pagination;