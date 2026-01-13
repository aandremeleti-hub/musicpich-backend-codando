class adminController {

    static async listarMusicas(req, res){
        res.json({message:"Listar músicas"})
    }

}

module.exports = adminController