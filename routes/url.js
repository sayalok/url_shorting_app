const express	= require('express')
const validUrl 	= require('valid-url')
const shortid 	= require('shortid')
const config 	= require('config')

const Url 		= require('../models/Url')

const router = express.Router();

router.post('/shorten', async (req, res, next) => {
	const {  longUrl } = req.body
	const baseUrl = config.get('baseUrl')

	if(!validUrl.isUri(baseUrl)) {
		res.status(401).json('Invalid Base Url')
	}

	const urlCode = shortid.generate()

	if(validUrl.isUri(longUrl)) {
		try {
			let url = await Url.findOne({ longUrl })

			if(url) {
				res.json(url)
			}else {
				const shortUrl = baseUrl + '/' + urlCode

				url = new Url({
					UrlCode,
					longUrl,
					shortUrl,
					date: new Date()
				})

				await Url.save();
				res.json(url)
			}
		}catch (err) {
			console.error(err);
			res.status(500).json('Server Error')
		}
	}else {
		res.status(401).json('Invalid Long Url')
	}
})

module.exports = router