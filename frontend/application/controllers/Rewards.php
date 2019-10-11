<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rewards extends CI_Controller {

	public function __construct() {
        parent::__construct();

        $this->load->helper('url');
		$this->load->model('rewardsModel');
	}
	
	public function index()
	{
		$data['rewards'] = $this->rewardsModel->getRewards();
		$data['server'] = $_SERVER["HTTP_HOST"];
		$this->load->view('rewards', $data);
	}
}
