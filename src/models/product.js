'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate(models) {}
    }
    product.init(
        {
            title: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'product',
        }
    );
    return product;
};
