//ID:03 contaims functions that allow for the retrival of dates and time, putting them into specific styles i.e. ddmmyyyy or hhmmss
//
//the function getCalendarDate retrives the calendar date as a string so that it can be passed to a variable later on - format ddmmyyyy
//---------------------------------------------------------------------------------------------------------++++++
function getCalendarDate() //the functions name
{
	var today = new Date(); //this gets todays date in a raw format
	var dd = today.getDate(); //this is a variable that gets the day i.e 1st of the month
	var mm = today.getMonth()+1;//this is a varible that gets the month, however due to computer math it represents January as 0, hence the +1 sum at the end.
	var yyyy = today.getFullYear(); //this get the current year from the varable today
//
	if(dd<10){dd='0'+dd} // as we require the dd format - this if statment ensures that if the calender date is less then the 10th (i.e. 5th) it put a zero in front (i.e. the 5th becomes 05)
	if(mm<10){mm='0'+mm} // as we require the mm format - this if statment ensures that if the calender month is less then 10 (i.e. january = 1) it puts a zero in front (i.e. the january will now equal 01)
// the following var put the above var's (variables) into a string the system can under stand and use later - format ddmmyyyy

var weekday=new Array(7);
weekday[0]="Sun";
weekday[1]="Mon";
weekday[2]="Tue";
weekday[3]="Wed";
weekday[4]="Thu";
weekday[5]="Fri";
weekday[6]="Sat";


var month=new Array(12);
month[0]="Jan";
month[1]="Feb";
month[2]="Mar";
month[3]="Apr";
month[4]="May";
month[5]="Jun";
month[6]="Jul";
month[7]="Aug";
month[8]="Sep";
month[9]="Oct";
month[10]="Nov";
month[11]="Dec";

var datestring = weekday[today.getDay()]+", "+ dd + " " +
						month[today.getMonth()] +" "+
						''+
						yyyy;
return datestring;
} //  end of getCalendarDate function
//---------------------------------------------------------------------------------------------------------++++++
//
//the function getClockTime retrives the current time as a string so that it can be passed to a variable later on - format hhmmss
//---------------------------------------------------------------------------------------------------------++++++
function getClockTime()//the functions name
{
   var now    = new Date();//this gets the current time in a raw format
   var hour   = now.getHours(); //this is a variable that gets the
   var minute = now.getMinutes(); //this is a variable that gets the
   var second = now.getSeconds(); //this is a variable that gets the
//
	if(hour < 10){hour='0'+hour} // as we require an hh format - this if statment ensures that if the current time in hours is less then the 10 (i.e. 5) it put a zero in front (i.e. 5 becomes 05)
	if(minute < 10){minute='0'+minute} // as we require an mm format - this if statment ensures that if the current time in minuets is less then the 10 (i.e. 5) it put a zero in front (i.e. 5 becomes 05)
	if(second < 10){second='0'+second} // as we require an ss format - this if statment ensures that if the current time in secounds is less then the 10 (i.e. 5) it put a zero in front (i.e. 5 becomes 05)
// the following var put the above var's (variables) into a string the system can under stand and use later - format hhmmss
   var timeString = hour + 
                    '' +":"+
                    minute +
                    '' +":"+
                    second + " +0100";
   return timeString;
} // end of getClockTime function

function getCalDate() //the functions name
{
var today = new Date(); //this gets todays date in a raw format
var dd = today.getDate(); //this is a variable that gets the day i.e 1st of the month
var mm = today.getMonth()+1;//this is a varible that gets the month, however due to computer math it represents January as 0, hence the +1 sum at the end.
var yyyy = today.getFullYear(); //this get the current year from the varable today
 
  var hour   = today.getHours(); //this is a variable that gets the
   var minute = today.getMinutes(); //this is a variable that gets the
//
if(dd<10){dd='0'+dd} // as we require the dd format - this if statment ensures that if the calender date is less then the 10th (i.e. 5th) it put a zero in front (i.e. the 5th becomes 05)
if(mm<10){mm='0'+mm} // as we require the mm format - this if statment ensures that if the calender month is less then 10 (i.e. january = 1) it puts a zero in front (i.e. the january will now equal 01)
	if(hour < 10){hour='0'+hour} // as we require an hh format - this if statment ensures that if the current time in hours is less then the 10 (i.e. 5) it put a zero in front (i.e. 5 becomes 05)
	if(minute < 10){minute='0'+minute} // as we require an mm format - this if statment ensures that if the current time in minuets is less then the 10 (i.e. 5) it put a zero in front (i.e. 5 becomes 05)
	
// the following var put the above var's (variables) into a string the system can under stand and use later - format ddmmyyyy
var datestring = dd+
						'-'+
						 mm+
						'-'+
						yyyy
						+":"+
						hour +
						minute;
return datestring;
} // END WLIDE
//---------------------------------------------------------------------------------------------------------++++++
 