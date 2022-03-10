<?php

namespace frontend\resource;


class Client extends \common\models\Client
{

  public function fields()
  {
    return ['id', 'first_name', 'perfil', 'address'];
  }
  public function extraFields()
  {
    return ['address_id', 'perfil_id'];
  }
};
