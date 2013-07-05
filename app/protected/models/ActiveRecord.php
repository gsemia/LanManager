<?php

/**
 * Description of ActiveRecord
 *
 * @author Lukas Spirig <lukas.spirig@gmail.com>
 */
abstract class ActiveRecord extends CActiveRecord {
	protected function jsonAttributes() {
		return $this->attributeNames();
	}
	
	protected function prepareJSON() {
		$result = array();
		foreach ($this->jsonAttributes() as $name) {
			$result[$name] = $this->$name;
		}
		
		return $result;
	}

	public function toJSON() {
		return CJSON::encode($this->prepareJSON());
	}
}
