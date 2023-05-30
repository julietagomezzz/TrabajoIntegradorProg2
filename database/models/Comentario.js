module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        comentarios: {
            type: dataTypes.STRING
        },
        usuario_id: {
            type: dataTypes.STRING
        },
        producto_id: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true,
    }
    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "producto_id"
        })
        Comentario.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "usuario_id"
        })
        }
    return Comentario;
}