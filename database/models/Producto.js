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
        descripcion: {
            type: dataTypes.STRING,
            allowNull:false
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull:true
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
            as: "usuario",
            foreignKey: "usuario_id"
        });
        Producto.hasMany(models.Comentario, {
            as: 'comentario', 
            foreignKey: 'producto_id'
        })
        }
    return Producto;

}