<?php
function connect_db(){
	$value = $_SERVER["MYSQLCONNSTR_localdb"]; //DB に接続するための情報
	preg_match("/Data Source=(.+?);/",$value,$server);
	preg_match("/User Id=(.+?);/",$value,$username);
	preg_match("/Password=(.+?)$/",$value,$password);
	$database = "localdb"; //DB 名
	//JSON 形式で出力すること通知(ブラウザや JavaScript に)
	header("Content-type: application/json; charset=utf-8");
	//MySQL に接続
	$db = new mysqli($server[1], $username[1], $password[1], $database);
	$db->set_charset("utf8");
	return $db;
}
?>