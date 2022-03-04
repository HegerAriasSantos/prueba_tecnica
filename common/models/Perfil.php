<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%perfil}}".
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $password
 */
class Perfil extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%perfil}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'password'], 'required'],
            [['name', 'password'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'password' => 'Password',
        ];
    }

    /**
     * {@inheritdoc}
     * @return \common\models\query\PerfilQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new \common\models\query\PerfilQuery(get_called_class());
    }
}
