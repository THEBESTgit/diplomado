import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Task = sequelize.define('Task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'The name of the task cannot be null'
            },
        },
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
       
    },
    
});