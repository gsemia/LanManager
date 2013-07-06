<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class UserIdentity extends CUserIdentity
{
	/**
	 * @var User
	 */
	private $user;
	
	/**
	 * Authenticates a user.
	 * @return boolean whether authentication succeeds.
	 */
	public function authenticate()
	{
		$user = User::model()->find('username = :login OR email = :login', 
				array(':login'=>$this->username));
		if ($user instanceof User) {
			if ($user->checkPassword($this->password)) {
				$this->user = $user;
				$this->errorCode = self::ERROR_NONE;
			} else {
				$this->errorCode = self::ERROR_PASSWORD_INVALID;
			}
		} else {
			$this->errorCode = self::ERROR_USERNAME_INVALID;
		}
		return !$this->errorCode;
	}
	
	public function getId() {
		return $this->user->id;
	}
	
	public function getName() {
		return $this->user->username;
	}
}