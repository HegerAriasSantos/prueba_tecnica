<?php

namespace frontend\controllers;

use frontend\resource\Perfil;
use yii\rest\ActiveController;

class PerfilController extends ActiveController
{
  public $modelClass = Perfil::class;
};
