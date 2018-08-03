const mysql = require('mysql')
let dataBaseConfig = require('database_config')
const pool = mysql.createPool(dataBaseConfig)

// 将结果以对象数组返回
let row = (sql, ...params) => {

}

// 返回一个对象
let first = (sql, ...params) => {

}

// 返回单个查询结果
let single = (sql, ...params) => {

}

// 执行代码 返回执行结果
let execute = (sql, ...params) => {

}

module.exports = {
  ROW: row,
  FIRST: first,
  SINGLE: single,
  EXECUTE: execute
}