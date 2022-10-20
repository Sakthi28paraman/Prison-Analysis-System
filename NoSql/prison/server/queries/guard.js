const Guard = require("../models/Guard")
//const guard = require("../models/guard")

Createguard = (req,res) =>{
    const body = req.body
    console.log(body)
    if(!body){
        return res.status(400).json({
            success:false,
            error : 'Provide a guard',
        })
    }

    const guard = new Guard(body)

    if(!guard){
        return res.status(400).json({
            success: false,
            error:err
        })
    }

    guard
    .save()
    .then(() =>{
        return res.status(201).json({
            success : true,
            message : 'guard Details Created!!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message : "guard Details Not Created!!"
        })
    })
}
updateguard = async(req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success : false,
            error : 'Body is needed for update',
        })
    }
    guard.findOne({ _id:req.params.id},(err,guard)=>{
            if(err){
                return res.status(404).json({
                    err,
                    message : 'guard Not Found!!!',
                })    
            }
            guard.Guard_Name = body.guard_Name
            guard.Guard_ID = body.guard_ID
            guard.Prison_ID = body.Prison_ID
            guard.Guard_Age = body.guard_Age
            guard.Guard_City = body.guard_City
            guard.Guard_State = body.guard_State
            guard.Guard_Rank = body.Guard_Rank
            guard.Guard_Salary = body.Guard_Salary

            guard
                .save()
                .then(()=>{
                    return res.status(200).json({
                        success:true,
                        id :  guard._id,
                        message: "guard Updated" 
                    })
                })
                .catch(error =>{
                    return res.status(404).json({
                        error,
                        message:"guard Updated",
                    })
                })
            })
}
deleteguard  = async (req, res) => {
    await guard.findOneAndDelete({ _id: req.params.id }, (err, guard) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!guard) {
            return res
                .status(404)
                .json({ success: false, error: `guard not found` })
        }

        return res.status(200).json({ success: true, data: guard })
    }).catch(err => console.log(err))
}

getguardById = async (req, res) => {
    await guard.findOne({ _id: req.params.id }, (err, guard) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!guard) {
            return res
                .status(404)
                .json({ success: false, error: `guard not found` })
        }
        return res.status(200).json({ success: true, data: guard})
    }).catch(err => console.log(err))
}

getguard = async (req, res) => {
    await guard.find({}, (err, guard) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!guard.length) {
            return res
                .status(404)
                .json({ success: false, error: `guard not found` })
        }
        return res.status(200).json({ success: true, data: guard })
    }).catch(err => console.log(err))
}

module.exports = {
    Createguard,
    updateguard,
    deleteguard,
    getguardById,
    getguard
}