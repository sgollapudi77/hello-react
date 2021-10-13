from azure.storage.blob import BlobServiceClient
import logging
import os
import azure.functions as func
import yfinance as yf

connectionString = "DefaultEndpointsProtocol=https;AccountName=pricepredictio0912187405;AccountKey=fkNojzR5QPRD3N73sJykRlgfz3WWhpNS4Tzn50ng+dwgSl6EByzS/3JqgruQNCu+qXHUlZrjU9nAd6o+I6R1Vg==;EndpointSuffix=core.windows.net"
containerName = "stockdata"

destPath = ""

def main(req: func.HttpRequest) -> func.HttpResponse:
    service_client = BlobServiceClient.from_connection_string(connectionString)
    container_client = service_client.get_container_client(containerName)

    name = req.params.get('name')
    time = req.params.get('time')

    if not name:
        name = "msft"
    if not time:
        time = "1h"

    name = name.lower()
    logging.info(name)
    details = yf.Ticker(str(name))

    try:
        currentPrice = details.info['currentPrice']
        hist = details.history(period="max")
        hist = hist.to_csv()
        azureName = destPath+name+".csv"
        
        blobs = container_client.list_blobs()
        list = []
        for blob in blobs:
            list.append(blob.name)
        
        if azureName not in list:
            #Upload to storage blob
            logging.info("Uploading the " + name + " to Azure storage")
            container_client.upload_blob(name=azureName,data=hist)
        return func.HttpResponse(str(currentPrice))
    except:
        return func.HttpResponse("Enter proper stock name")
        
    # with open(file,"rb") as data:
    # return func.HttpResponse("hey")        
    # # logging.info(hist)
    # file = sourcePath + "/"+ name +".csv"
