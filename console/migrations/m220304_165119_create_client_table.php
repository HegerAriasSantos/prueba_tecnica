<?php

use phpDocumentor\Reflection\Types\Integer;
use yii\db\Migration;

/**
 * Handles the creation of table `{{%client}}`.
 */
class m220304_165119_create_client_table extends Migration
{
  /**
   * {@inheritdoc}
   */
  public function safeUp()
  {
    $this->createTable('{{%client}}', [
      'id' => $this->primaryKey(),
      'first_name' => $this->string(),
      'perfil_id' => $this->integer(),
      'address_id' => $this->integer(),
    ]);
    $this->createIndex('idx_client_perfil_id', '{{%client}}', 'perfil_id');
    $this->addForeignKey('FK_client_perfil_perfil_id', '{{%client}}', 'perfil_id', '{{%perfil}}', 'id');

    $this->createIndex('idx_client_address_id', '{{%client}}', 'address_id');
    $this->addForeignKey('FK_client_address_address_id', '{{%client}}', 'address_id', '{{%address}}', 'id');
  }

  /**
   * {@inheritdoc}
   */
  public function safeDown()
  {
    $this->dropIndex('idx_client_perfil_id', '{{%client}}');
    $this->dropIndex('idx_client_address_id', '{{%client}}');
    $this->dropForeignKey('FK_client_perfil_perfil_id', '{{%client}}');
    $this->dropForeignKey('FK_client_address_address_id', '{{%client}}');
    $this->dropTable('{{%client}}');
  }
}
