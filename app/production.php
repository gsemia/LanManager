<?php

$autoloader=dirname(__FILE__).'/../vendor/autoload.php';
$yii=dirname(__FILE__).'/../vendor/yiisoft/yii/framework/yii.php';
$config=dirname(__FILE__).'/protected/config/production.php';

require $autoloader;
require $yii;
Yii::createWebApplication($config)->run();
