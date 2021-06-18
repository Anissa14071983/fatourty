<?php

require_once(__DIR__ ."/model.php");
/**
 * @OA\Schema()
 */
	class Service extends Model{

 		function __construct() {
      	$this->table = "service";
        $this->primary = "idservice";
    	}

   	/**
		     * The service idservice
			 * @var integer
			 * @OA\Property()
			 */
			 public $idservice;
			 /**
		     * The service libelleservice
			 * @var string
			 * @OA\Property()
			 */
			 public $libelleservice;
			 /**
		     * The service catigorie_services
			 * @var string
			 * @OA\Property()
			 */
			 
			 public $catigorie_services;
			 
	}

?>