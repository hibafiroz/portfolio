const express = require('express')
const router = express.Router()
const { about, skill, project, contactGet } = require('../Controller/user-controller')

router.get('/about',about)
router.get('/skill', skill)
router.get('/project', project)
router.get('/contact',contactGet)

module.exports = router