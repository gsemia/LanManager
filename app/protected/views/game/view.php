<?php
$this->breadcrumbs=array(
	'Games'=>array('index'),
	$model->name,
);

$this->menu=array(
	array('label'=>'List Game','url'=>array('index')),
	array('label'=>'Create Game','url'=>array('create')),
	array('label'=>'Update Game','url'=>array('update','id'=>$model->id)),
	array('label'=>'Delete Game','url'=>'#','linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Game','url'=>array('admin')),
);
?>

<h1>View Game #<?php echo $model->id; ?></h1>

<?php $this->widget('bootstrap.widgets.TbDetailView',array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'name',
		'description',
	),
)); ?>
