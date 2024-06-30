const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();

// Налаштування папки для статичних файлів
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));  // для обслуговування bundle.js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Забезпечення правильного MIME-типу для CSS файлів
app.use((req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    }
    next();
});

// Підключення до бази даних MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Nastia',
    password: 'rootN',
    database: 'Course_work'
});

connection.connect((err) => {
    if (err) {
        console.error('Помилка підключення до бази даних: ', err.stack);
        return;
    }
    console.log('Підключено до бази даних');
});

// Обслуговування основної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '1_main.html'));
});

// Обслуговування галереї
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '2_gallery.html'));
});

// Обробник POST-запиту для сторінки реєстрації
app.post('/register', (req, res) => {
    const { username, email, userpassword } = req.body;

    // Перевірка на пусті значення
    if (!username || !email || !userpassword) {
        return res.status(400).send('Не всі дані заповнені');
    }

    // Перевірка формату електронної пошти
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    };
    if (!validateEmail(email)) {
        return res.status(400).send('Невірний формат електронної пошти');
    }

    const queryString = 'INSERT INTO registration (username, email, userpassword) VALUES (?, ?, ?)';
    connection.query(queryString, [username, email, userpassword], (err, result) => {
        if (err) {
            console.error('Помилка при вставці даних: ', err.stack);
            res.status(500).send('Помилка при обробці запиту');
            return;
        }
        console.log('Дані успішно додані до бази даних');
        res.status(200).send('Дякую за реєстрацію!');
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
    console.log(`Node сервер: http://localhost:${PORT}`);
});
