#!/bin/bash

rm -f temp_cmo_insert.sql
rm -f cmo_insert.sql

while IFS=, read -r offer_id 

do 
echo "$offer_id" | sed 's/ *$//g'
  
	while IFS=, read -r  col_id col_issueno col_checkdigit


  		do echo "$col_id,$col_issueno,$col_checkdigit" | sed 's/ *$//g'
	

		echo "INSERT INTO lmholtp_ext.collector_my_offers VALUES ('NDWH',$col_id,$col_issueno,'$offer_id',$col_checkdigit,'Not Opted In','Not Started',trunc(SYSDATE) +30,trunc(SYSDATE) + -1,NULL,NULL,NULL,'N1116NBA01',NULL,'TEST',trunc(SYSDATE) + 0,NULL,NULL,999,NULL);" >> temp_cmo_insert.sql
  		 
 
	done < ~/pushnotification/cmo_insert.txt

done < offer_ids.txt

echo "commit;" >> temp_cmo_insert.sql
echo "exit;" >> temp_cmo_insert.sql

 sqlplus / @ temp_cmo_insert.sql



