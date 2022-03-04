<?php

namespace frontend\controllers;

use common\models\Client;
use yii\rest\ActiveController;

class ClientController extends ActiveController{
  public $modelClass = Client::class;
};

