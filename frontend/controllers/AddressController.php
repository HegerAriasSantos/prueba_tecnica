<?php

namespace frontend\controllers;

use common\models\Address;
use yii\rest\ActiveController;

class AddressController extends ActiveController{
  public $modelClass = Address::class;
};

