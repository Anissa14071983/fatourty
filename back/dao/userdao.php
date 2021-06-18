 <?php

require_once(__DIR__ ."/../models/user.php");

  class UserDao extends User{



    function __construct($data) {

		parent::__construct();
		if($data != null){
			foreach($data as $property => $value) {
			  if(property_exists("User" , $property)){
				$this->$property = $value;
			  }
			}
			foreach($this as $property => $value) {
			  if(!isset($data->$property) && $property != "primary" && $property != "table" && $property != $this->primary){
				unset($this->$property);
			  }
			}
		}
    }

	 public function login() {

      $res = $this->find("email = :email AND password = :password" , [":email" => $this->email , ":password" => $this->password ]);
      if(!isset($res[0])){
        http_response_code(400);
        die("no user ");
      }
      $s = $res[0];

      return  $s;
    }



}

?>
