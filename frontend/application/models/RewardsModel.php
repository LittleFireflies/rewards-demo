<?php
use GuzzleHttp\Client;

class RewardsModel extends CI_model {
    private $client;
    private $BASE_URL;

    public function __construct() {
        if (ENVIRONMENT === 'production') {
            $this->BASE_URL = "https://staging-rewards-api-jreg6tctjq-an.a.run.app";
        } else {
            $this->BASE_URL = "http://localhost:3000";
        }
        $this->client = new Client([
            'base_uri' => $this->BASE_URL,
        ]);
    }

    public function getRewards() {
        $response = $this->client->request('GET', '/rewards', []);
        $result = json_decode($response->getBody()->getContents(), true);

        return $result;
    }

}