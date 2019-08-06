const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
	longUrl: String,
	shortUrl: String,
	UrlCode:  String,
	date: { type: String, default: Date.now }
})

module.exports = mongoose.model('Url', UrlSchema)