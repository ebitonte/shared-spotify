var express = require("express");
var router = express.Router();

router.get("/:user", function(req, res) {
	res.render('users', {title: "USER", user: req.params.user});
});

module.exports = router;