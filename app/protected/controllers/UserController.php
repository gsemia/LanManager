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
		echo EJSON::encode(User::current());
	}
	
	public function actionCreate()
	{
		if (User::current()->isAdmin) {
			$model=new User();

			if(isset($_POST['User']))
			{
				$model->attributes=$_POST['User'];
				if($model->save()) {
					echo EJSON::encode(array('success'=>true, 'id'=>$model->id));
					return;
				} else
					$message = implode("\n", $model->errors);
			} else 
				$message = 'No data available!';			
		} else
			$message = 'You do not have permission for this!';
		echo EJSON::encode(array('success'=>false, 'message'=>$message));
	}
	
	public function actionUpdate()
	{
		if (User::current()->isAdmin) {
			$model=User::model()->findByPk($_POST['User']['id']);

			if ($model instanceof User) {
				if(isset($_POST['User']))
				{
					$model->attributes=$_POST['User'];
					if($model->save()) {
						echo EJSON::encode(array('success'=>true, 'id'=>$model->id));
						return;
					} else
						$message = implode("\n", $model->errors);
				} else 
					$message = 'No data available!';
			} else 
				$message = 'This user does not exist!';
		} else
			$message = 'You do not have permission for this!';
		echo EJSON::encode(array('success'=>false, 'message'=>$message));
	}
}
