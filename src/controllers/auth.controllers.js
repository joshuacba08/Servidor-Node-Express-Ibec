

const createUser = (req, res) => {   
    console.log(req.body)

    return res.json({
        ok:true,
        data: req.body
    })
} 

const login = (req, res) => {
    return
}

module.exports = {
    createUser,
    login,
}