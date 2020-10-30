-- 1. Write a query to list the number of jobs available in the employees table
SELECT COUNT(JOB_ID) as number_jobs
FROM hr.jobs;

-- 2. Write a query to get the total salaries payable to employees.
SELECT SUM(SALARY) as TOTAL_SALARY
FROM hr.EMPLOYEES;

-- 3. Write a query to get the minimum salary from employees table. Go to the editor
SELECT MIN(SALARY) as MIN_SALARY
FROM hr.EMPLOYEES;

-- 4. Write a query to get the maximum salary of an employee working as a Programmer. Go to the editor
SELECT MAX(MAX_SALARY) as MAX_SALARY
FROM hr.JOBS
WHERE JOB_ID = 'IT_PROG';

SELECT MAX(salary) 
FROM employees 
WHERE job_id = 'IT_PROG';

-- 5. Write a query to get the average salary and number of employees working the department 90. Go to the editor
SELECT * FROM hr.EMPLOYEES;
SELECT * FROM hr.jobs;

SELECT AVG(salary),count(*) 
FROM employees 
WHERE department_id = 90;

-- 6. Write a query to get the highest, lowest, sum, and average salary of all employees. Go to the editor
SELECT ROUND(MAX(salary),0) 'Maximum',
ROUND(MIN(salary),0) 'Minimum',
ROUND(SUM(salary),0) 'Sum',
ROUND(AVG(salary),0) 'Average'
FROM employees;
-- 7. Write a query to get the number of employees with the same job. Go to the editor

-- 8. Write a query to get the difference between the highest and lowest salaries. Go to the editor

-- 9. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager. Go to the editor

-- 10. Write a query to get the department ID and the total salary payable in each department. Go to the editor

-- 11. Write a query to get the average salary for each job ID excluding programmer. Go to the editor

-- 12. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only. Go to the editor

-- 13. Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000. Go to the editor

-- 14. Write a query to get the average salary for all departments employing more than 10 employees. Go to the editor
