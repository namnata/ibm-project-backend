const express = require('express');
const router = express.Router();

/*
 * TODO:
 *  Should query database?
 *  There should probably be some encryption going on
 *  Send status back rather than data
 *  Send cookie back
 */
router.post('/login', loginHandler);

module.exports = router;

async function loginHandler(req, res) {
    await ((req.body.username['username'] === 'ibm' && req.body.password['password'] === 'ibm')||
        (req.body.username['username'] === 'user1' && req.body.password['password'] === 'ibm1')) ? res.send({login: 'success'}) : res.send({login: 'fail'});
}
