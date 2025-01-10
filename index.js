// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmployee = {...obj};
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = {...key};
  return newEmployee;
}

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee[key];
//   const newEmployee = { ...employee };
//   // employee[key] = undefined;
//   return employee && newEmployee;
// }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  let newEmployee = { ...employee };
  return employee;
}
