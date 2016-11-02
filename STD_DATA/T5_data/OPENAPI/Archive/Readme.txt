Optin Process:

1. Query to run to fetch the data from db
   select resource_owner, token  from oauth_token where created > 1395273600000 and created < 1395417600000;

2. Make sure they have the treatment code as 999 in Molehill database

3. copy the data to excel and do a filter based on unique records in the acc col.

4. So each collector has 20 offers in the CMO table , so just copy each offer for all the records in the table.

So for example there are 4000 unique records then 4000 * 20 = 80000 would be the source file for optin.

Mobile offers

01B19I1061
01B19I1064
01B19I1065
01B19I1047
01B19I1066
01B19I1053
01B19I1067
01B19I1054
01B19I1055
01B19I1056
01B19I1057
01B19I1058
23B1PM0001
24B1F03986
34B1F03986
10BENFB001
10BENFB002
10BENFB003
13B3C002BB
19B0009610
