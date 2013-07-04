<?php

/**
 * Description of TypeScriptCommand
 *
 * @author Lukas Spirig
 */
class TypeScriptCommand extends CConsoleCommand {
	private $classIgnores = array('LoginForm', 'User');
	
	public function run($args) {
		foreach ($this->loadClasses() as $class) {
			echo get_class($class) . "\n";
		}
		
	}
	
	private function loadClasses() {
		$result = array();
		$it = new RecursiveDirectoryIterator(Yii::getPathOfAlias('application.models'));
		
		foreach(new RecursiveIteratorIterator($it) as $file) {
			if ($file->isFile()) {
				$class = $file->getBasename('.php');
				if (!in_array($class, $this->classIgnores))
					$result[] = forward_static_call(array($class, 'model'));
			}
		}
		
		return $result;
	}
}

