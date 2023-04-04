const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/run_transaction', (req, res) => {
  axios.post('https://api.nexiopaysandbox.com/pay/v3/process', req.body, {
    headers: { 'Authorization': req.headers.authorization },// pass auth from nexio api
  })
  .then(function (axiosResponse) {
    res.status(axiosResponse.status).json(axiosResponse.data);// return status and data from nexio api
  })
  .catch(function (axiosError) {
    res.status(axiosError?.response?.status).json(axiosError?.response?.data);
  });
});

app.get('/view_transactions', (req, res) => {
  axios.get('https://api.nexiopaysandbox.com/transaction/v3', {
    headers: { 'Authorization': req.headers.authorization },// pass auth from nexio api
    params: req.query,
  })
  .then(function (axiosResponse) {
    res.status(axiosResponse.status).json(axiosResponse.data);// return status and data from nexio api
  })
  .catch(function (axiosError) {
    res.status(axiosError?.response?.status).json(axiosError?.response?.data);
  });
});

app.listen(3000);
