<?php
$this->breadcrumbs=array(
	'Games',
);

$this->menu=array(
	array('label'=>'Create Game','url'=>array('create')),
	array('label'=>'Manage Game','url'=>array('admin')),
);
?>

<h1>Games</h1>

<?php $this->widget('bootstrap.widgets.TbListView',array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
