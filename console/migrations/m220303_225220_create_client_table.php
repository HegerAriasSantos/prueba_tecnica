<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%client}}`.
 */
class m220303_225220_create_client_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%client}}', [
            'id' => $this->primaryKey(),
            'first_name'=> $this->string(),
            'last_name'=> $this->string(),
            'perfil_id' => $this->integer(),
            'address_id' => $this->integer()
        ]);
        
        $this->addForeignKey('FK_client_perfil_perfil_id', `{{%client}}`, 'perfil_id', `{{%perfil}}`, 'id');
        $this->addForeignKey('FK_client_address_address_id', `{{%client}}`, 'perfil_id', `{{%address}}`, 'id');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('FK_client_perfil_perfil_id', `{{%client}}`);
        $this->dropForeignKey('FK_client_address_address_id', `{{%client}}`);
        $this->dropTable('{{%client}}');
    }
}
