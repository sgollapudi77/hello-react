import logging
import azure.functions as func
from requests import Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    fiatCurrency = "INR"
    parameters = {
    'start':'1',
    'limit':'5',
    'convert':fiatCurrency
    }
    headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': 'c0e149dc-ba92-4dba-a2f8-65f3390d61c2',
    }

    session = Session()
    session.headers.update(headers)
    data = {}

    try:
        response = session.get(url, params=parameters)
        response = json.loads(response.text)
        data["currency"] = []
        data["price"] = []
        data["symbol"] = []
        data["marketCap"]= []
        data["change_1h"]= []
        data["change_24h"]= []
        data["change_7d"]= []
        data["change_30d"]= []
        data["change_60d"]= []
        data["change_90d"]= []
        for i in range(len(response["data"])):    
            data["currency"].append((response["data"][i]['name']))
            data["symbol"].append((response["data"][i]['symbol']))
            data["price"].append((response["data"][i]['quote'][fiatCurrency]["price"]))
            data["marketCap"].append((response["data"][i]['quote'][fiatCurrency]["market_cap"]))
            data["change_1h"].append((response["data"][i]['quote'][fiatCurrency]["percent_change_1h"]))
            data["change_24h"].append((response["data"][i]['quote'][fiatCurrency]["percent_change_24h"]))
            data["change_7d"].append((response["data"][i]['quote'][fiatCurrency]["percent_change_7d"]))
            data["change_30d"].append((response["data"][i]['quote'][fiatCurrency]["percent_change_30d"]))
            data["change_60d"].append((response["data"][i]['quote'][fiatCurrency]["percent_change_60d"]))
            data["change_90d"].append((response["data"][i]['quote'][fiatCurrency]["percent_change_90d"]))
        logging.info(data)
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        logging.info(e)
        data["request"] = ["timed out"]
    return func.HttpResponse(json.dumps(data))
