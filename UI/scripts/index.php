<?php

$conn = new mysqli("localhost","root","","templates");
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST'){
    $title = $_POST['title'];
    $paragraph = $_POST['text'];
    $image = $_POST['image'];

    $conn->query("INSERT INTO template (TITLE,PARAGRAPHS,IMAGE) VALUES ('$title','$paragraph','$image');");
}else{
    echo "Error in inputs";
}

$conn->close();