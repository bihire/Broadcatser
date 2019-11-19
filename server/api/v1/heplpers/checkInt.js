export default (obj) => {
    const integer = Number(obj)
    return (Number.isInteger(integer) && integer > 0 && integer.toString().length <= 8) ? integer : false
}