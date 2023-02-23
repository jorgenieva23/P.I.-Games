const { getAllGen } = require('../Controllers/GenresController')

const getGenHandlers = async (req, res)=>{
    const {name} = req.body
        try {
            const results = await getAllGen(name)
            console.log(results);
            
            res.status(200).send(results)
        } catch (error) {
            res.status(400).json({ error: error.message });
    }
}

module.exports = {getGenHandlers}