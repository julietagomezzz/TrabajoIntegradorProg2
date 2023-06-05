module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contrasena: {
            type: dataTypes.STRING,
            allowNull : false
        },
        fotoDePerfil: {
            type: dataTypes.STRING
        },
        fecha : {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.BIGINT
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
    }
    let Usuario = sequelize.define(alias,cols,config); 
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto , {
            as: 'producto',
            foreignKey: 'usuario_id' 
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'usuario_id'
        })
        
        
    }
    return Usuario;

}