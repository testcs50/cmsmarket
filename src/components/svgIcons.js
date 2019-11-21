import React from 'react';

export const IconStar = props => {

    let filling = props.filling ? props.filling : 'none';

    return (
        <svg className="svg" width="16px" height="16px" viewBox="0 0 16 16">
            <g stroke="none" strokeWidth="1" fill={ filling } fillRule="evenodd" strokeLinejoin="bevel">
                <g className="svg-icon" transform="translate(-32.000000, -377.000000)" strokeWidth="1.5">
                    <g transform="translate(30.000000, 46.000000)">
                        <g transform="translate(0.000000, 328.000000)">
                            <g>
                                <g transform="translate(0.000000, 1.000000)">
                                    <polygon points="10 14.6085145 5.67376208 17 6.5 11.9347524 3 8.34752416 7.83688104 7.60851449 10 3 12.163119 7.60851449 17 8.34752416 13.5 11.9347524 14.3262379 17"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export const IconSearch = () => (
    <svg className="svg" width="13px" height="13px" viewBox="0 0 13 13">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g className="svg-icon" transform="translate(-34.000000, -419.000000)" strokeWidth="1.5">
                <g transform="translate(30.000000, 46.000000)">
                    <g transform="translate(0.000000, 328.000000)">
                        <g transform="translate(0.000000, 40.000000)">
                            <g transform="translate(0.000000, 1.000000)">
                                <circle cx="9.5" cy="9.5" r="4.75"></circle>
                                <path fill="red" d="M12.9375,12.9375 L16.5,16.5"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

export const IconCabinet = () => (
    <svg className="svg" width="10px" height="13px" viewBox="0 0 10 13">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g className="svg-icon" transform="translate(-5.000000, -4.000000)" strokeWidth="1.5">
                <path d="M5.75,4.75 L5.75,7.74626417 L8.57434444,10.5 L5.75,13.2537358 L5.75,16.25 L14.25,16.25 L14.25,4.75 L5.75,4.75 Z"></path>
            </g>
        </g>
    </svg>
);