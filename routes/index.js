var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (!req.isAuthenticated()) {
        let errors = [];
        res.render('index', { errors });
    } else {
        res.redirect('/home', { title: 'Express' });
    }
});

router.get('/home', ensureAuthenticated, function(req, res) {
    if (!req.isAuthenticated()) {
        let errors = [];
        res.redirect('index', { errors });
    } else {
        res.render('dashboard', {
            name: req.user.name
        })
    }
});

router.get('/profile', ensureAuthenticated, function(req, res) {
    if (!req.isAuthenticated()) {
        let errors = [];
        res.redirect('index', { errors });
    } else {
        res.render('profile', {
            name: req.user.name
        })
    }
});




// router.get('/home', function(req, res) {

//     res.render('dashboard', {
//         name: 'Subeed'

//     });

// });


module.exports = router;