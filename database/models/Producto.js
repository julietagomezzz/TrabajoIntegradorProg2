module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true,
    }
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "usuario_id"
        });
        Producto.hasMany(models.Comentario, {
            as: 'comentarios', 
            foreignKey: 'producto_id'
        })
        }
    return Producto;

}