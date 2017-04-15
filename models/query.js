﻿var mysql = require('mysql');

module.exports = function(sqlStatement, data, callback) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'myWebsite'
    });

    connection.connect();
    connection.query(sqlStatement, data, function(error, result) {
        callback(error, result)
    });
    connection.end();

    //数据库相关操作

    // //添加数据1
    // connection.query("INSERT INTO test(id,name) VALUES(222,'dong')", function (error, results) {
    //   if (error) throw error;
    //   console.log(results);
    // });

    // //添加数据2
    // connection.query("INSERT INTO test(id,name) VALUES(?,?)",[11111,'dongliru'], function (error, results) {
    //   if (error) throw error;
    //   console.log(results);
    // });

    // //更新数据
    // connection.query("UPDATE test SET name = ? WHERE Id = ?",['new',121], function (error, results) {
    //   if (error) throw error;
    //   console.log(results);
    // });

    // //查询数据
    // connection.query('SELECT * FROM test', function (error, results, fields) {
    //   if (error) throw error;
    //   console.log(results[0].id);
    // });
}