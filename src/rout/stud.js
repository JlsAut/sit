import pool from "../connect.js";
//Вывести всех
export const gS_all = async(req, res) => {
    const students = await pool.query('SELECT * FROM students');
    console.log(students.rows);
    res.json(students.rows);
};
//Вывести одного
export const gS_one = async(req, res) => {
    const id = req.params.id;
    const student = await pool.query(`SELECT * FROM students WHERE id = '${id}'`);
    if (student.rows != "") {
        res.send(student.rows);
    } else {
        res.status(404).send()
    }
};
//Создать
export const cS = async(req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const group = req.body.group;
    const newstudent = await pool.query(`INSERT INTO students (first_name, last_name, group_name, created_at, updated_at) VALUES ('${firstName}','${lastName}','${group}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`);
    res.send(newstudent.rows[0]);
    console.log('Создано');
    res.send('Создано');

};
//Удалить
export const dS = async(req, res) => {
    const id = req.params.id;
    const student = await pool.query(`SELECT * FROM students WHERE id = '${id}'`);
    if (student.rows != "") {
        const delstud = await pool.query(`DELETE FROM students WHERE id='${id}'`);
        console.log('Удалено');
        res.send('Удалено');
    } else {
        res.status(404).send('Ошибка')
    }
};
//Изменить
export const uS = async(req, res) => {
    if (req.body.id) {
        const upid = req.body.id; //Номер        
        const firstName = req.body.firstName; //Имя
        const lastName = req.body.lastName; //Фамилия
        const group = req.body.group; //Группа
        const updatestudent = await pool.query(`UPDATE students SET first_name = '${firstName}', last_name = '${lastName}', group_name = '${group}', updated_at = CURRENT_TIMESTAMP WHERE id = '${upid}'`);
        console.log('Изменено');
        res.send('Изменено');
    } else { res.status(404).send('Ошибка'); }
};
