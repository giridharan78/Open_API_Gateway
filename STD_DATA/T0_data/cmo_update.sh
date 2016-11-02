#!/bin/bash

rm -f temp_cmo_update.sql


while IFS=, read -r offer_id 

do 
echo "$offer_id" | sed 's/ *$//g'
  
	while IFS=, read -r  col_id
	
	do echo "$col_id" | sed 's/ *$//g'
	
		echo "update lmholtp_ext.collector_my_offers set CMO_D_EXPIRY_DATE = trunc(SYSDATE)+60,CMO_D_EFFECTIVE_DATE = trunc(SYSDATE) -2 
		    where CMO_N_COLLECTOR_ACCOUNT_NUM = $col_id  and CMO_V_BONUS_OFFER_ID = '$offer_id ';" >> temp_cmo_update.sql 
	
	
	
    
                                
        done < ~/pushnotification/cmo_update.txt
done < offer_ids.txt

echo "commit;" >> temp_cmo_update.sql
echo "exit;" >> temp_cmo_update.sql

 sqlplus / @ temp_cmo_update.sql
