<?php

namespace frontend\resource;


class Perfil extends \common\models\Perfil
{


  public function extraFields()
  {
    return ['password'];
  }
};
