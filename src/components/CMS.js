import React from "react";
import { useDispatch } from 'react-redux';

import addInstrument from '../actions/addInstrument';
import deleteInstrument from '../actions/deleteInstrument';

const CMS = props => {

    const dispatch = useDispatch()

    return (
        <div className="main__cms">
            <div className="main__cms-name">
                <img className="main__cms-logo" src={ props.image } />
                <div className="main__cms-title">{ props.title }</div>
            </div>
            <div className="main__cms-projects">
                { `${props.worksCount} ${declension(+props.worksCount, 'проект')}` }
            </div>
            <div className="main__cms-partners">
                { `${props.partnersCount || 0} ${declension(+props.partnersCount, 'партнер')}` }
            </div>
            <div className="main__cms-rate">
                { props.rate }
            </div>
            <div className="main__cms-compare">
                {
                    props.isFromFavorite
                    ?
                    <button
                        value={props.id}
                        className="main__delete-favorite"
                        onClick={
                            e => {
                                dispatch(deleteInstrument(+e.target.value));
                            }
                        }
                    >
                        Удалить
                    </button>
                    :
                    <label>
                        <input
                            className="main__cms-checkbox"
                            type="checkbox"
                            value={props.id}
                            onChange={
                                e => {
                                    const action = e.target.checked ? addInstrument({...props}) : deleteInstrument(+e.target.value);

                                    dispatch(action)
                                }
                            }
                        />
                        <div className="main__cms-checkbox-sub">&#128504;</div>
                    </label>
                }
            </div>
        </div>
    );
}

const declension = (number, word) => {
    const rem = number % 10;

    if (rem === 1) return word;
    else if (rem === 2 || rem === 3 || rem === 4) return word + 'а';

    return word + 'ов';
}

export default CMS;