export const dateStringToDate = (date: string): Date => {
    const dateString = date
        .split('/')
        .map(value => {
            return Number(value);
        })
    return new Date(dateString[2], dateString[1] - 1, dateString[0])
}