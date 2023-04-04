# Nexio Express App

## Project Installation
* Run `npm install` to install project

## Running Project
* Run `npm run start` to run server.  Listens on localhost:3000.

## Endpoints
Each endpoint is a wrapper for Nexio's endpoints. They still require the same Basic auth that Nexio does(https://docs.nexiopay.com/docs/authentication). Also the same query parameters or request body that apply to Nexio's endpoints can be used on these endpoints.
* The `run_transaction` endpoint wraps Nexio's `https://api.nexiopaysandbox.com/pay/v3/process` endpoint. For example, `localhost:3000/run_transaction` with the same request body as a request to `https://api.nexiopaysandbox.com/pay/v3/process` will return the same response. See docs here 
https://docs.nexiopay.com/reference/runcardtransaction for more details.

* The `view_transactions` endpoint wraps Nexio's `https://api.nexiopaysandbox.com/transaction/v3` endpoint.
For example, `localhost:3000/view_transactions?kount.&limit=2` will return the same data as `https://api.nexiopaysandbox.com/transaction/v3?kount.&limit=2`. See docs here https://docs.nexiopay.com/reference/viewtransactions for more details.
