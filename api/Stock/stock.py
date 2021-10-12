import json
import logging
import azure.functions as func
import yfinance as yf

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    
    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')
    logging.info(name)
    details = yf.Ticker(str(name))
    currentPrice = details.info['currentPrice']
    hist = details.history(period="1mo",interval="1h")
    logging.info(currentPrice)
    return func.HttpResponse(str(currentPrice))
    # return func.HttpResponse("hey")