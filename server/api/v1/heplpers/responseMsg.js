export default class responseMsg{
    static async successMsg(res, status, message) {
        res.status(status).json({
            status: status,
            message: message
        })
    }
   static async errorMsg() {
        res.status(status).json({
            status: status,
            error: message
        })
    }
   
}
    