<?php

class UserController extends Controller
{
	public function actionIndex()
	{
		$this->render('index');
	}

	public function actionGet()
	{
		echo EJSON::encode(User::model()->findAll());
	}
	
	public function actionCurrent()
	{
		echo EJSON::encode(User::model()->findByPk(Yii::app()->user->id));
	}
	
	public function actionCreate()
	{
		echo EJSON::encode(array('success'=>false, 'message'=>'bullshit', 'id'=>3));
	}
}
