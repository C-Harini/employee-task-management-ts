enum EmployeeStatus
{
Active="ACTIVE",
Inactive="INACTIVE"
}
enum TaskStatus
{
    Pending="PENDING",
    Completed="COMPLETED"
}
type EmployeeID = number;
type TaskID = number;

interface Person{
    id:EmployeeID,
    name:String
}
interface Employee extends Person{
    department:string,
    status:EmployeeStatus
}

interface Task{
    taskId:TaskID,
    title:string,
    taskstatus: TaskStatus
}
type SearchResult=Employee | Task;
type AssignedTask=Employee & Task;

function createEmployee(
    id:EmployeeID,
    name:string,
    dept:string
): Employee{
    return {
        id,
        name,
        department:dept,
        status:EmployeeStatus.Active
    };
}

function createTask(id: TaskID, title: string): Task {
  return {
    taskId: id,
    title,
    taskstatus: TaskStatus.Pending
  };
}

function assignTask(emp: Employee, task: Task): AssignedTask {
  return {
    ...emp,
    ...task
  };
}
function displayEmployee(emp: Employee): void {
  console.log(
    `Employee: ${emp.name}, Dept: ${emp.department}, Status: ${emp.status}`
  );
}

const emp1 = createEmployee(1, "Harini", "IT");
const task1 = createTask(101, "Prepare Report");

displayEmployee(emp1);

const assigned = assignTask(emp1, task1);
console.log("Assigned Task:", assigned);
