<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%client}}".
 *
 * @property int $id
 * @property string|null $first_name
 * @property int|null $perfil_id
 * @property int|null $address_id
 *
 * @property Address $address
 * @property Perfil $perfil
 */
class Client extends \yii\db\ActiveRecord
{
  /**
   * {@inheritdoc}
   */
  public static function tableName()
  {
    return '{{%client}}';
  }

  /**
   * {@inheritdoc}
   */
  public function rules()
  {
    return [
      [['perfil_id', 'address_id'], 'integer'],
      [['first_name'], 'string', 'max' => 255],
      [['address_id'], 'exist', 'skipOnError' => true, 'targetClass' => Address::class, 'targetAttribute' => ['address_id' => 'id']],
      [['perfil_id'], 'exist', 'skipOnError' => true, 'targetClass' => Perfil::class, 'targetAttribute' => ['perfil_id' => 'id']],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function attributeLabels()
  {
    return [
      'id' => 'ID',
      'first_name' => 'First Name',
      'perfil_id' => 'Perfil ID',
      'address_id' => 'Address ID',
    ];
  }

  /**
   * Gets query for [[Address]].
   *
   * @return \yii\db\ActiveQuery|\common\models\query\AddressQuery
   */
  public function getAddress()
  {
    return $this->hasOne(Address::class, ['id' => 'address_id']);
  }

  /**
   * Gets query for [[Perfil]].
   *
   * @return \yii\db\ActiveQuery|\common\models\query\PerfilQuery
   */
  public function getPerfil()
  {
    return $this->hasOne(Perfil::class, ['id' => 'perfil_id']);
  }

  /**
   * {@inheritdoc}
   * @return \common\models\query\ClientQuery the active query used by this AR class.
   */
  public static function find()
  {
    return new \common\models\query\ClientQuery(get_called_class());
  }
}
