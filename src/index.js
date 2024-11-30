import app from './app.js';
import sequelize from './database/database.js'
import'dotenv/config'
import logger from './logs/logger.js';
async function main(){
    await sequelize.sync({force:false});
    const port = process.env.PORT;
    app.listen(port);
    logger.info('Server running on port ${port}');
    logger.error('Server running on port ${port}');
    logger.warn('Server running on port ${port}');
    logger.fatal('Server running on port ${port}');


    
}

main();
