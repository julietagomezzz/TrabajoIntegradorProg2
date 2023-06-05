module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey : true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        comentarios: {
            type: dataTypes.TEXT
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false,
    }
    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "producto_id"
        })
        Comentario.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey: "usuario_id"
        })
        }
        return Comentario;
}