const express = require("express");
const router = express.Router();
const authentication = require('../authentication/auth')

const postcontroller = require('../controller/post')

router.post('/jobs', authentication.auth , postcontroller.addpost)
router.get('/findjob',postcontroller.findpost)
router.get('/jobs/:id', authentication.auth, postcontroller.postdesc)










module.exports = router