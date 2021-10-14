from azure.storage.blob import BlobServiceClient
import logging
import json
import yfinance as yf
import azure.functions as func
from requests import Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects

class StockHandler:
    def __init__(self) -> None:        
        self.connectionString = "DefaultEndpointsProtocol=https;AccountName=pricepredictio0912187405;AccountKey=fkNojzR5QPRD3N73sJykRlgfz3WWhpNS4Tzn50ng+dwgSl6EByzS/3JqgruQNCu+qXHUlZrjU9nAd6o+I6R1Vg==;EndpointSuffix=core.windows.net"
        self.containerName = "stockdata"

        self.service_client = BlobServiceClient.from_connection_string(self.connectionString)
        self.container_client = self.service_client.get_container_client(self.containerName)
        self.details = []

    def isProper(self, name:str):
        try:
            self.details = yf.Ticker(str(name))
            logging.info(self.details.info['currentPrice'])
            return True
        except:
            return False

    def isPresent(self, name:str):
        azureName = name+".csv"
        blobs = self.container_client.list_blobs()
        list = []
        for blob in blobs:
            list.append(blob.name)
            
        if azureName not in list:
            return False
        else:
            return True

    def uploadToStorage(self, name:str):
        # details = yf.Ticker(str(name))
        hist = self.details.history(period="max")
        hist = hist.to_csv()
        azureName = name+".csv"
        try:
            logging.info("Uploading the " + name + " to Azure storage")
            self.container_client.upload_blob(name=azureName,data=hist)
            # return True
        except:
            logging.info("Timed out while connecting to Azure")
            # return False

def getPrediction(name:str, time: int):
    url = "http://d68f9c6d-6375-4e7e-81e3-ffd11b047868.eastasia.azurecontainer.io/score"
    body = {
        "symbol":name,
        "daycount":time
    }
    session = Session()
    try:
        response = session.get(url, json=body)
        response = json.loads(response.text)
        # logging.info(response['modelOutpt'])
        return str(response['modelOutpt'])
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        return "Timed out"

def main(req: func.HttpRequest) -> func.HttpResponse:
    name = req.params.get('name')
    time = req.params.get('time')
    if not name:
        name = "msft"
    if not time:
        time = 1
    name = name.lower()
    stockHandler = StockHandler()
    if not stockHandler.isProper(name):
        return func.HttpResponse("Enter valid stock symbol")

    if not stockHandler.isPresent(name):
        stockHandler.uploadToStorage(name)
    
    value = getPrediction(name,time)
    return func.HttpResponse(str(value))
        