#!/bin/bash
cd /home/ubuntu/app/

sudo mkdir -p /var/www/universal
sudo cp -r * /var/www/universal/
cd /var/www/universal


sudo rm -f .env.production || true
sudo touch .env.production
sudo chmod a=rwx .env.production


#URL="$(curl --silent http://169.254.169.254/latest/meta-data/public-hostname)"
#URL=http://"$URL"

URL=https://universalservice.restacct.com
echo "SERVER_URL=$URL" >> .env.production
echo "HOST=qa10-universalservices.caijygvgrdwc.us-west-1.rds.amazonaws.com" >> .env.production
echo "RASI_RETRIEVAL_API_URL=http://172.25.2.189:85/api" >> .env.production
echo "CLIENT_SERVER_URL=http://universalservice.restacct.com" >> .env.production
cat .env.production