export const namespace = 'account';

export default function account (state = null, action) {
    switch (action.type) {
        case `${namespace}/update`:
            return action.payload;
        default:
            return state;
    }
}
