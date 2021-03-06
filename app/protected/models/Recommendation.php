<?php

/**
 * This is the model class for table "recommendation".
 *
 * The followings are the available columns in table 'recommendation':
 * @property string $eventId
 * @property string $gameId
 *
 * The followings are the available model relations:
 * @property Event $event
 * @property Game $game
 * @property UserRecommendation $userRecommendation
 */
class Recommendation extends ActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Recommendation the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'recommendation';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('eventId, gameId', 'required'),
			array('eventId, gameId', 'length', 'max'=>10),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('eventId, gameId', 'safe', 'on'=>'search'),
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
			'event' => array(self::BELONGS_TO, 'Event', 'eventId'),
			'game' => array(self::BELONGS_TO, 'Game', 'gameId'),
			'userRecommendation' => array(self::HAS_MANY, 'UserRecommendation', array('eventId', 'gameId'))
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'eventId' => 'Event',
			'gameId' => 'Game',
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

		$criteria->compare('eventId',$this->eventId,true);
		$criteria->compare('gameId',$this->gameId,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}