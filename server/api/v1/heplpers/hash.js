import bcryptjs from 'bcryptjs'

const hashPassword = async password => {
    try {
        const salt = await bcryptjs.genSalt(10);
        const hashed = await bcryptjs.hash(password, salt);
        return hashed;
    } catch (error) {
        return error
    }

}
export default hashPassword