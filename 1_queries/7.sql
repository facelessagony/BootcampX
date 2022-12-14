SELECT students.name, students.start_date AS student_start_date, cohorts.id AS cohort_id, cohorts.start_date AS cohort_start_date 
FROM students JOIN cohorts ON cohorts.id = students.cohort_id
WHERE students.start_date != cohorts.start_date ORDER BY cohort_start_date;