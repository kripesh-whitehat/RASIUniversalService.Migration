#!/bin/bash
cd /home/ubuntu/app/
yarn install
ls -la
cat .env.production
sudo yarn run deploy-production