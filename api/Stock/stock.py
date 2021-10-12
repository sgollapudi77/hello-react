import json
import logging
import azure.functions as func
import yfinance as yf

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    
    name = req.params.get('name')
    time = req.params.get('time')
    if not name:
        name = "msft"
    if not time:
        time = "1h"
    logging.info(name)
    details = yf.Ticker(str(name))
    currentPrice = details.info['currentPrice']
    hist = details.history(period="1mo",interval=str(time))
    logging.info(hist)
    return func.HttpResponse(str(currentPrice))
    # return func.HttpResponse("hey")