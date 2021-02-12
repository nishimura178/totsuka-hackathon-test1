<?php
//db接続
require("../connect_db.php");
$db=connect_db();

session_start(); //セッション管理を開始する
$email = $_POST["email"]; //$email ←JavaScript からのﾊﾟﾗﾒﾀ
//$sql ← 実行する SQL 文
$sql = "select * from user where email='{$email}'";
$res = $db->query($sql);

if($res != false){ //実行に成功した場合
$row = $res->fetch_assoc(); //結果を１行取得
	if($row != false){ //結果が取得できた場合
	echo '{"result":"Success"}';
	$_SESSION['id'] = $row['id']; //id をセッション変数に記憶
	}else{ //結果が取得できなかった場合
	echo '{"result":"Failure"}';
	}
}else{ //SQL の実行に失敗した場合
echo '{"result":"Failure"}';
}
//MySQL から切断する
$db->close();
?>
