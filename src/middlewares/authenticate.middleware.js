import jwt from 'jsonwebtoken'; 
import 'dotenv/config';
export function authenticateToken (req, res, next) { // Obtenemos el jwt de la cabecera de autorizacion 
    const authHeader = req.headers['authorization']; 
    console.log('authHeader', authHeader);
    // Bearer asdfasdfasdfasdfasdfasdf //['Bearer', 'asdfasdfasdfasdfas']
    // 0, 1
    const token = authHeader && authHeader.split(' ')[1] 
    console.log('token', token);
    if (!token) return res.sendStatus(401);
    // verificamos y decodificamos el token 
    const secret = process.env.JWT_SECRET 
    jwt.verify(token, secret, (err, user) => {
        if (err){
            console.log('error', err);
            return res.sendStatus(403);
        } 
        console.log('user', user)
        req.user = user; 
        next();
    })
}