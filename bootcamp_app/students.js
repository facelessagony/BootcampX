const { Pool } = require('pg');
const myArgs = process.argv.slice(2);


const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT id, name, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id=cohorts_id
WHERE cohort_name LIKE '%${myArgs[0]}%'
LIMIT ${myArgs[1] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});
