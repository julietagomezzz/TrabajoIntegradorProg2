module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id : {
            autoIncrement: true,
            primaryKey : true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull:false
        },
        cover: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull:false
        },
        usuarioId: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull:true
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false,
    }
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        });
        Producto.hasMany(models.Comentario, {
            as: 'comentario', 
            foreignKey: 'productoId'
        })
        }
    return Producto;

}