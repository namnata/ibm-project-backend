const express = require('express');
const router = express.Router();

/*
 * TODO:
 *  Should query database
 *  There should probably be some encryption going on
 *  Send status back
 */
router.post('/', loginHandler);

module.exports = router;

async function loginHandler(req, res) {
    await req.body.username['username'] === 'ibm' && req.body.password['password'] === 'ibm' ? res.send({login: 'success'}) : res.send({login: 'fail'});
}
