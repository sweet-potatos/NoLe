(async () => {
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize('test', 'root', '123456', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
  });

  const fruit_table = sequelize.define('fruit_table', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    stock: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },{
    timestamps: false,
  })

  let ret = await fruit_table.sync();
  console.log(ret);
  ret = await fruit_table.create({
    name: '苹果',
    price: 4.5,
    stock: 20,
  });

  const frult_table_data = await fruit_table.findAll();
  console.log('frult_table_data', frult_table_data);
})()