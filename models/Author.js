import sequelize from '../lib/db';

const Author = sequelize.define('Author', {
  name: { type: DataTypes.STRING, allowNull: false },
});

export default Author;
