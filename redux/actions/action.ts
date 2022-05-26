export const GET_USER = 'GET_USER';

export function getUser(user: any) {
    return {
        type: GET_USER,
        user
    }
}
