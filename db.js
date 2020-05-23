const sequelize=require('sequelize')

const db=new sequelize("ahoryaneogmils:a73b68642f81426176e85be04b315147a902aaa75f379e5865fd3d052f6f2421@ec2-34-204-22-76.compute-1.amazonaws.com:5432/dbidshvkj1tq01")

const Tasks=db.define('task',{
    id:{
        type:sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:sequelize.DataTypes.STRING,
        allowNull:false
    },
    done:{
        type:sequelize.DataTypes.BOOLEAN ,
        defaultValue:false

    }
})

module.exports={
    db,Tasks
}