const Employee = require('../model/employeeModel');
const bcrypt = require('bcrypt');
const { setToken } = require('../utils/auth');


// REGISTER
const registerEmployee = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // CHECK EMAIL
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {

      return res.status(400).json({
        message: 'Email Already Exists'
      });

    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE EMPLOYEE
    const employee = new Employee({

      name,
      email,
      password: hashedPassword

    });

    await employee.save();

    // TOKEN
    const token = setToken(employee._id);

    res.status(201).json({

      message: 'Employee Registered Successfully',
      employee,
      token

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// LOGIN
const loginEmployee = async (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK EMAIL
    const employee = await Employee.findOne({ email });

    if (!employee) {

      return res.status(400).json({
        message: 'Invalid Email'
      });

    }

    // CHECK PASSWORD
    const checkPassword = await bcrypt.compare(
      password,
      employee.password
    );

    if (!checkPassword) {

      return res.status(400).json({
        message: 'Invalid Password'
      });

    }

    // TOKEN
    const token = setToken(employee._id);

    res.status(200).json({

      message: 'Login Successfully',
      employee,
      token

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


module.exports = {

  registerEmployee,
  loginEmployee

};