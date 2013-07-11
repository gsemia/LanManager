<?php

/**
 * This is the model class for table "user".
 *
 * The followings are the available columns in table 'user':
 * @property string $id
 * @property string $username
 * @property string $email
 * @property string $name
 * @property string $password
 * @property integer $level
 * 
 * @property boolean $isAdmin
 *
 * The followings are the available model relations:
 * @property Event[] $events
 * @property Game[] $games
 * @property UserRecommendation[] $userRecommendations
 *
 * @property Rating[] $ratings
 * @property Invitation[] $invitations
 */
class User extends ActiveRecord
{
	private static $current;
	
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return User the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
	
	/**
	 * Returns the current logged in user
	 * @return User
	 */
	public static function current()
	{
		if (self::$current !== null)
			return self::$current;
		return self::$current = User::model()->findByPk(Yii::app()->user->id);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'user';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('username, email', 'required'),
			array('level', 'numerical', 'integerOnly'=>true),
			array('username, email, name', 'length', 'max'=>45),
			array('password', 'length', 'max'=>90),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, username, email, name, password, level', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'events' => array(self::MANY_MANY, 'Event', 'invitation(userId, eventId)'),
			'games' => array(self::MANY_MANY, 'Game', 'rating(userId, gameId)'),
			'userRecommendations' => array(self::HAS_MANY, 'UserRecommendation', 'userId'),
			'ratings' => array(self::HAS_MANY, 'Rating', 'userId'),
			'invitations' => array(self::HAS_MANY, 'Invitation', 'userId'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'username' => 'Username',
			'email' => 'Email',
			'name' => 'Name',
			'password' => 'Password',
			'level' => 'Level',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id,true);
		$criteria->compare('username',$this->username,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('name',$this->name,true);
		$criteria->compare('password',$this->password,true);
		$criteria->compare('level',$this->level);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
	
	protected function jsonAttributes() {
		return array_diff(parent::jsonAttributes(), array('password'));
	}
	
	public function getIsAdmin()
	{
		return $this->level >= 9;
	}

	public function setNewPassword($password)
	{
		$ph = new \Hautelook\Phpass\PasswordHash(12, false);
		$this->password = $ph->HashPassword($password);
	}
	
	public function checkPassword($password)
	{
		$ph = new \Hautelook\Phpass\PasswordHash(12, false);
		return $ph->CheckPassword($password, $this->password);
	}
	
	public function beforeSave() {
		if (parent::beforeSave()) {
			if ($this->isNewRecord && empty($this->password))
				$this->setNewPassword(substr(md5(sha1(time())), 0, 10));
			return true;
		}
		return false;
	}
	
	public function cacheUntilNewRecord()
	{
		return $this->cache(2592000, new CDbCacheDependency('SELECT MAX(id) FROM ' . $this->tableName()));		
	}
}