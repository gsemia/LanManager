<?php

class UserController extends Controller
{
	public function actionIndex()
	{
		$this->render('index');
	}

	public function actionGet()
	{
		echo EJSON::encode(User::model()->cacheUntilNewRecord()->findAll());
	}

	public function actionCurrent()
	{
		echo EJSON::encode(User::model()->findByPk(Yii::app()->user->id));
	}
	
	public function actionCreate()
	{
		echo EJSON::encode(array('success'=>true, 'message'=>'bullshit', 'id'=>3));
	}
	
	public function actionUpdate()
	{
		echo EJSON::encode(array('success'=>true, 'message'=>'bullshit', 'id'=>3));
	}
}
