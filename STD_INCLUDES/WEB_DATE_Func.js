//##############################################      This Function would get todays date     ##########################################
function todayDate()
{
var today = new Date(); //this gets todays date in a raw format
	var dd = today.getDate(); //this is a variable that gets the day i.e 1st of the month
	var mm = today.getMonth()+1;//this is a varible that gets the month, however due to computer math it represents January as 0, hence the +1 sum at the end.
	var yyyy = today.getFullYear(); //this get the current year from the varable today
	
	if(dd<10){dd='0'+dd} 
	if(mm<10){mm='0'+mm} 
	var date = dd+"/"+mm+"/"+yyyy //this is to bring it in dd/mm/yyyy format
	
	return date;
	}


//#############################################   The Below Function will deduct 6 months from the present sysdate       #####################	
function prevdate()
{

	
		function addMonths(date, months) 	{
        date.setMonth(date.getMonth() + months);
        return date;
        }


var prevdate = addMonths(new Date(), -4); 
var dd = prevdate.getDate();
var mm =  prevdate.getMonth()+1;
var yyyy =  prevdate.getFullYear(); 

if(dd<10){dd='0'+dd} 
if(mm<10){mm='0'+mm} 
var pdate = dd+"/"+mm+"/"+yyyy

return pdate;
}

//#############################################   The Below Function will deduct 12 months from the present sysdate       #####################
function olddate()
{

	
		function addMonths(date, months) 	{
        date.setMonth(date.getMonth() + months);
        return date;
        }


var olddate = addMonths(new Date(), -12); 
var dd = olddate.getDate();
var mm =  olddate.getMonth()+1;
var yyyy =  olddate.getFullYear(); 
var odate = dd+"/"+mm+"/"+yyyy

return odate;
}


	
	//#############################################    retursn date in a rray format                #########################################
// Date created: 25/02/2013 
//#######################################################################################################################################
function prevdateArray()
{
                                function addMonths(date, months)        {
        date.setMonth(date.getMonth() + months);
        return date;
        }

var date_array = new Array(3)

var prevdateArray = addMonths(new Date(), -5); 

var dd   = prevdateArray.getDate();
var mm   = prevdateArray.getMonth()+1;
var yyyy = prevdateArray.getFullYear();

if(dd<10){dd='0'+dd} 
if(mm<10){mm='0'+mm} 

date_array[0] =  dd;
date_array[1] =  mm;
date_array[2] =  yyyy;

return date_array;
}

function todaysdateArray()
{
            		
	

var Tdate_array = new Array(3)

var today = new Date();

var dd   = today.getDate();
var mm   = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10){dd='0'+dd} 
if(mm<10){mm='0'+mm} 


Tdate_array[0] =  dd;
Tdate_array[1] =  mm;
Tdate_array[2] =  yyyy;

return Tdate_array;
}

	
//##############################################     End    ###############################################################################