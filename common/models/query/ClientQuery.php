<?php

namespace common\models\query;

use yii\base\Behavior;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;

/**
 * This is the ActiveQuery class for [[\common\models\Client]].
 *
 * @see \common\models\Client
 */
class ClientQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/
    public function behaviors(){
      return [
        TimestampBehavior::class,
        [
          'class'=> BlameableBehavior::class,
          'updatedByAttribute' => false
        ]
        ];
    }

    /**
     * {@inheritdoc}
     * @return \common\models\Client[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return \common\models\Client|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
