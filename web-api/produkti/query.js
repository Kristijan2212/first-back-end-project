const con = require('../database');

getAllQueryProdukt = () => {
    const query = "SELECT * FROM produkti";
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
        });
    });
};

getAllProdukt = async(req, res) => {
    try {
        const produkti = await getAllQueryProdukt();
        res.status(200).send(produkti);
    } catch (error) {
        res.status(500).send(error)
    };
}

module.exports = {
    getAllProdukt
}