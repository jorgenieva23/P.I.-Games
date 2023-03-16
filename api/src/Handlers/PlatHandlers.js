const {getAllPlat} = require("../Controllers/PlatControler")

const getPlatHandlers = async (req, res)=>{
        try {
            const results = await getAllPlat()
            
            res.status(200).send(results)
        } catch (error) {
            res.status(400).json({ error: error.message });
    }
}

module.exports = {getPlatHandlers}