const con = require('../database');


createUserQuery = (createuser, iduser) => {
    var query = "INSERT INTO createuser (iduser, Email, Password) VALUES (?, ?, ?)";
    return new Promise((resolve, reject) => {
        con.query(query, [iduser, createuser.Email, createuser.Password], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

getAll = async(req, res) => {
    try {
        await createUserQuery();

        res.status(200).send("OK");
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    getAll
}