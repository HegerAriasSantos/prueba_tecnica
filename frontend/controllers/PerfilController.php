<?php

namespace frontend\controllers;

use common\models\Perfil;
use yii\rest\ActiveController;

class PerfilController extends ActiveController{
  public $modelClass = Perfil::class;
};

