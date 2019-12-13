const con = require('../database');

getAllQuery = () => {
    let query = "SELECT * FROM korisnik";
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

getAllDel = async(req, res) => {
    try {
        const users = await getAllQuery();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};
module.exports = {
    getAllDel
}