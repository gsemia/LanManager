<?php
/**
 * This is the bootstrap file for test application.
 * This file should be removed when the application is deployed for production.
 */

// change the following paths if necessary
$autoloader=dirname(__FILE__).'/../vendor/autoload.php';
$yii=dirname(__FILE__).'/../vendor/yiisoft/yii/framework/yii.php';
$config=dirname(__FILE__).'/protected/config/test.php';

// remove the following line when in production mode
defined('YII_DEBUG') or define('YII_DEBUG',true);

require $autoloader;
require($yii);
Yii::createWebApplication($config)->run();
