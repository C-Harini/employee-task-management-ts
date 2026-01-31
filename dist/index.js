"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeStatus;
(function (EmployeeStatus) {
    EmployeeStatus["Active"] = "ACTIVE";
    EmployeeStatus["Inactive"] = "INACTIVE";
})(EmployeeStatus || (EmployeeStatus = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "PENDING";
    TaskStatus["Completed"] = "COMPLETED";
})(TaskStatus || (TaskStatus = {}));
function createEmployee(id, name, dept) {
    return {
        id,
        name,
        department: dept,
        status: EmployeeStatus.Active
    };
}
function createTask(id, title) {
    return {
        taskId: id,
        title,
        taskstatus: TaskStatus.Pending
    };
}
function assignTask(emp, task) {
    return {
        ...emp,
        ...task
    };
}
function displayEmployee(emp) {
    console.log(`Employee: ${emp.name}, Dept: ${emp.department}, Status: ${emp.status}`);
}
const emp1 = createEmployee(1, "Harini", "IT");
const task1 = createTask(101, "Prepare Report");
displayEmployee(emp1);
const assigned = assignTask(emp1, task1);
console.log("Assigned Task:", assigned);
//# sourceMappingURL=index.js.map