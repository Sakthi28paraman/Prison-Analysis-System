const express =require("express")
const PrisonQ = require('../queries/prison')
const prisonerQ = require('../queries/prisoner')
const guardQ = require("../queries/guard")
const paroleQ = require("../queries/parole")
const punishQ = require("../queries/punishment")
const visitorQ = require("../queries/visitor")
const router = express.Router()

router.post('/CreatePrison',PrisonQ.CreatePrison)
router.post('/CreatePrisoner',prisonerQ.Createprisoner)
router.post('/CreateGuard',guardQ.Createguard)
router.post('/CreateParole',paroleQ.Createparole)
router.post('/CreatePunishment',punishQ.Createpunishment)
router.post('/CreateVisitor',visitorQ.Createvisitor)


router.post('/UpdatePrison',PrisonQ.updatePrison)

router.get('/getprison',PrisonQ.getPrison)
module.exports = router