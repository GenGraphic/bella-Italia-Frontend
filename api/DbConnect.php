<?php
    class DbConnect {
        private $server = '127.0.0.1';
        private $port = '3306';
        private $dbname = 'u825581627_shopItems';
        private $user = 'u825581627_BellaItalia';
        private $pass = 'Liana.2021';

        public function connect() {
            try {
                $conn = new PDO('mysql:host=' . $this->server . ';port=' . $this->port . ';dbname=' . $this->dbname, $this->user, $this->pass);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            } catch (\Exception $e) {
                echo "Database Error: " . $e->getMessage();
            }
        }
    }
?>