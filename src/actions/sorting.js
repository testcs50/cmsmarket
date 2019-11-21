export default function(sortType, sortDesc) {
    return {
        type: 'SORTING',
        payload: {
            sort: sortType,
            desc: sortDesc
        }
    }
}