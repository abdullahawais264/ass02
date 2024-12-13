import sequelize from '../lib/db';

const Genre = sequelize.define('Genre', {
  name: { type: DataTypes.STRING, allowNull: false },
});

export default Genre;
