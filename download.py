# A short script to download urls (used to download most of the stuff in resources/external)
import wget

while True:
    url = input('Enter url: ')
    wget.download(url)
