const parseArray = require('../utils/parseStringAsArray')
const Dev = require('../models/Dev')
const axios = require('axios');

module.exports = {
    async index(req, res) {
        const devs = await Dev.find()
        return res.json(devs)
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const response = await axios.get(`https://api.github.com/users/${github_username}`)

            console.log(response.data)

            const { name = login, avatar_url, bio } = response.data;
            //const arrayTechs = parseArray(techs)
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ]
            }

            try {
                dev = await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs: techs,
                    location
                }), console.log("DEV CRIADO COM SUCESSO")
            }catch(err){
                console.log(err, "ERRO AO CRIAR DEV")
            }
        }

        return res.json(dev)
    }, 

    async update(req, res){

        const {techs, longitude, latitude, bio, avatar_url } = req.body

       let dev = await Dev.updateOne({
            techs,
            longitude,
            latitude,
            bio,
            avatar_url
        })

        return res.json(dev)
    },

    // async delete(req, res){

    //     let dev = await Dev.deleteOne({

    //     })
    // }
    
}