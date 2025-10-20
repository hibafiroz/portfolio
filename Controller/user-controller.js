const about = (req, res) => {
    res.render('about')
}

const project = (req, res) => {
    res.render('project')
}

const contactGet = (req, res) => {
    res.render('contact')
}

const skill = (req, res) => {
    res.render('skill')
}

const contactPost = (req, res) => {
    const { name, email, contact } = req.body
}

module.exports={about,contactGet,contactPost,project,skill}