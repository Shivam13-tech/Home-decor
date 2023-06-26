export const authenticate = (value) => {
    return {
        type: 'Set_token',
        payload: value
    }
}