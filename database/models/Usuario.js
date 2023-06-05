module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
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
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true,
    }
    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}