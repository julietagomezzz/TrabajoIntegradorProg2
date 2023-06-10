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
        usuarioId: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        productoId: {
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
            foreignKey: "productoId"
        })
        Comentario.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey: "usuarioId"
        })
        }
        return Comentario;
}