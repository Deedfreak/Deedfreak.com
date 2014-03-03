<?php
class cPDO extends PDO
{
    public function __construct($file = 'not_set')
    {
		if($file == 'not_set')
		{
			$file = './settings/connection.php';
		}
        if (!require_once($file)) throw new exception('Unable to open settings file.');

		        $dns = $GLOBALS['settings']['database']['driver'] .
		        ':host=' . $GLOBALS['settings']['database']['host'] .
		        ((!empty($GLOBALS['settings']['database']['port'])) ? (';port=' . $GLOBALS['settings']['database']['port']) : '') .
		        ';dbname=' . $GLOBALS['settings']['database']['table'];

        parent::__construct($dns, $GLOBALS['settings']['database']['username'], $GLOBALS['settings']['database']['password']);
        //unset($GLOBALS['settings']);
    }

	public function run(){ //Execute and return error code
			$args=func_get_args();
			$this->laststh=$this->prepare(array_shift($args));
			$this->laststh->execute($args);
			return (count($this->laststh->errorInfo())==1)?true:false;
	}

	public function getObj(){ //Next row
			$args=func_get_args();
			$this->laststh=$this->prepare(array_shift($args));
			$this->laststh->execute($args);
			return $this->laststh->fetchObject();
	}

	public function getAll(){
			$args=func_get_args();
			$this->laststh=$this->prepare(array_shift($args));
			$this->laststh->execute($args);
			return $this->laststh->fetchAll(PDO::FETCH_ASSOC);
	}

	public function getOne(){
			$args=func_get_args();
			$this->laststh=$this->prepare(array_shift($args));
			$this->laststh->execute($args);
			return $this->laststh->fetch(PDO::FETCH_ASSOC);
	}

	public function getErrorInfo()
	{
		return $this->laststh->errorInfo();
	}
}
?>