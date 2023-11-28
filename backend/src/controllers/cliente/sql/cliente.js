//modelo sql
import sequelize from '../../../database/connection-v2-sequelize.js';
import jwt from 'jsonwebtoken';

export const login = (req, res) => {
    const { username, password } = req.body;

    const consult = 'SELECT * FROM usuario WHERE correo_us = ? AND contraseña = ?';

    try {
        sequelize.query(consult, [username, password], (err, result) => {
            if (err) {
                res.send(err);
            } else {
                if (result.length > 0) { // Corrección: `length` en lugar de `lenght`
                    const token = jwt.sign({username}, "Stack", {
                        expiresIn: '60m'
                    });
                    res.send({token});
                } else {
                    console.log(result);
                    res.send({ message: 'Email erroneo' });
                }
            }
        });
    } catch (error) {
        // Manejo de errores si ocurre un error en el bloque `try`
    }
}
