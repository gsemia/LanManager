<?php

return CMap::mergeArray(
	require(dirname(__FILE__).'/main.php'),
	array(
		'components'=>array(
			'db'=>array(
				'connectionString' => 'mysql:host=[host];dbname=[dbname]',
				'username' => '[username]',
				'password' => '[password]',
				'charset' => 'utf8',
				'schemaCachingDuration' => 2592000,
			),
		),
	)
);
