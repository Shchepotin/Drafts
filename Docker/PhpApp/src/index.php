<?php

$pdo = new \PDO("mysql:host=mysql;dbname=php_app", "root", "secret");

print_r($pdo->query("SELECT * FROM users")->fetchAll());
