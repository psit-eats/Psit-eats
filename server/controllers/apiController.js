const Canteen = require('../models/Canteen.js')

const controller = {
    // creating a new canteen
    createCanteen: async(req, res) => {
        console.log(req.body)
        const { name, location, manager } = req.body
        try{
            const result = await Canteen.createCanteen(name, location, manager)
            if(!result){
                res.status(500).json({ success: false, error: 'Some error in creating the user'})
            }else{
                res.status(201).json({ success: true, result})
            }
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    },

    // updating the menu of a canteen with _id = canteenID
    updateMenu: async (req, res) => {
        try{
            const id = req.params.canteenID
            const {menu} = req.body
            const result = await Canteen.updateMenu(id, menu)
            if(!result){
                res.status(500).json({ success: false, error: 'Some error in updating menu' })
            }else{
                res.status(201).json({ success: true, result })
            }
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    },

    // fetches all the canteens present in the campus
    getCanteens: async(req, res) => {
        try{
            const result = await Canteen.getCanteens()
            if(!result){
                res.status(500).json({ success: false, error: 'Some error in fetching canteens' })
            }else{
                res.status(200).json({ success: true, result })
            }
        }catch(err){
            res.status(500).json({ success: false, error: err })
        }
    }, 
    
    // fetches info of a particular canteen
    getCanteenInfo: async(req, res) => {
        try {
            const id = req.params.canteenID
            const result = await Canteen.getCanteenInfo(id)
            if(!result){
                res.status(500).json({ success: false, error: 'Some error in fetching canteen info' })
            }else{
                res.status(200).json({ success: true, result })
            }
        } catch (err) {
            res.status(500).json({ success: false, error: err })
        }
    }
}

module.exports = controller