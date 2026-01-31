# 📘 Employee Task Management System (TypeScript)

## 📌 Project Overview
This project is a simple **Employee Task Management System** built using **TypeScript**.
It demonstrates core TypeScript concepts without using class-based architecture.

The project focuses on **type safety**, **clean structure**, and **practical usage** of TypeScript features.

---

## 🧩 Problem Statement
This project manages employees and their assigned tasks using TypeScript interfaces, enums,
type aliases, union types, and intersection types to ensure type safety and prevent invalid data.

---

## ✅ TypeScript Concepts Used
- Interface
- Interface Extension (`extends`)
- Enum
- Type Alias
- Union Type
- Intersection Type
- Function Return Types
- `void` return type

---

## 🏗️ Project Structure
employee-task-management-ts/
│
├── src/
│ └── index.ts
│
├── dist/
│ └── index.js
│
├── tsconfig.json
├── package.json
└── README.md


---

## 🧠 Project Features

### 👤 Employee Management
- Employee ID
- Name
- Department
- Status (ACTIVE / INACTIVE)

### 📝 Task Management
- Task ID
- Title
- Task Status (PENDING / COMPLETED)

### 🔗 Task Assignment
- Assigns a task to an employee using **intersection types**

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Compile TypeScript
npx tsc
3️⃣ Run the project
node dist/index.js
🖥️ Sample Output
Employee: Harini, Dept: IT, Status: ACTIVE
Assigned Task: {
  id: 1,
  name: 'Harini',
  department: 'IT',
  status: 'ACTIVE',
  taskId: 101,
  title: 'Prepare Report',
  taskStatus: 'PENDING'
}
