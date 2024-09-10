CREATE USER adcm with encrypted password '123456';
CREATE DATABASE adcm_db OWNER adcm;

sudo docker run -d --restart=always -p 8000:8000 -v /opt/adcm:/adcm/data -e DB_HOST="localhost" -e DB_PORT="5432" -e DB_USER="adcm" -e DB_NAME="adcm_db" -e DB_PASS="123456" --name adcm hub.arenadata.io/adcm/adcm