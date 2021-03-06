const parseArray = require('../utils/parseStringAsArray')
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {

        const { techs, latitude, longitude } = req.query
        const arrayTechs = parseArray(techs)
        const devs = await Dev.find({
            techs: {
                $in: arrayTechs
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }

        }, console.log(req.query))

        return res.json({ devs })
    }
}