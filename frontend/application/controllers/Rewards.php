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
		$this->load->view('rewards', $data);
	}
}
