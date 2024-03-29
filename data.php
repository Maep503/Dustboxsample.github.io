<?php

  //ヘッダー情報の設定
  header("Content-Type: application/json; charset=utf-8");

  $data = array();

  // DB接続情報
  $host = "host情報";
  $dbname = "db name情報";
  $user = "ユーザ情報";
  $pass = "パスワード";

  // DB接続情報設定・SQL準備・接続
  $dbh = new PDO('mysql:host=' . $host . 'dbname=' . $dbname . 'charset=utf8', $user, $pass);

  $sql = "select classNo, class, text, name, status, lat, lng, img from placedata";
  $sth = $dbh -> prepare($sql);
  $sth -> execute();

  //データを取得する
  $data = $sth -> fetchAll(PDO::FETCH_ASSOC);

  //jsonオブジェクト化
  echo json_encode($data);
?>
