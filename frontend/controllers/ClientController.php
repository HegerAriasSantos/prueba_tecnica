<?php

namespace frontend\controllers;

use frontend\resource\Client;
use yii\rest\ActiveController;

class ClientController extends ActiveController
{
  public $modelClass = Client::class;
};
