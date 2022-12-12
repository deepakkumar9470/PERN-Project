
module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("students", {
      name: {
        type: Sequelize.STRING
      },
      rollno: {
        type: Sequelize.INTEGER
      },
     
    });
  
    return Student;
  };