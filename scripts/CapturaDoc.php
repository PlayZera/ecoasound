<?php
// diretorio utilizado para salvar os arquivos de audio

$dir = "../audios";

//documento do usuário upado
$audio = $_FILES["mp3_sound"];

$nomeDoDoc =  $audio["name"];

//verifica se o arquivo foi enviado com sucesso
if (move_uploaded_file($audio["tmp_name"], "$dir/".$audio["name"])) 
{ 
    echo "Arquivo enviado com sucesso!"; 
} 
else { 
    echo "Erro, o arquivo n&atilde;o pode ser enviado."; 
}
?>
