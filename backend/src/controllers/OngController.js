
const crypto = require('crypto')
const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
  async index(reqquest, response) {
    const ongs = await connection('ongs').select('*')
    return response.json(ongs)
  },

  async store(request, response) {
    const {name, email, whatsapp, city, uf} = request.body;
  
    const id = generateUniqueId();
  
    await connection('ongs').insert({
      id, name, email, whatsapp, city, uf
    })
    return response.json({id})
  }
}