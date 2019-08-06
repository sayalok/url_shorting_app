const express   	= require('express')
const Url 		= require('../models/Url')

const router = express.Router();

router.get('/:code', async (req, res) => {
	try {
		let url = await Url.findOne({ UrlCode: req.params.code })
		if (url) {
			return res.redirect(url.longUrl)
		} else {
			res.status(404).json('No Url Found')
		}
	} catch (error) {
		res.status(500).json('Server error')
	}
})

module.exports = router