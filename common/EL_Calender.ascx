<%@ control language="VB" autoeventwireup="false" inherits="EL_Calender, App_Web_gskr5llg" %>

<span id=<% =ucID%>spanDate style="border: solid 1px black; padding: 2px; padding-right: 0px; background-color:<% =mBackColor%>">
    <input type=text id=<% =ucID%>txtDate maxlength=10 READONLY
            style="width: <% =mWidth%>; font-size: <% =mFontSize%>;border: solid 0px white; color:<% =mTextColor%>; 
                    background-color:<% =mBackColor%>" />
    <img id=<% =ucID%>imgDrop src="<%=ImageDropDown%>" align=absmiddle onclick="<% =ucID%>fn_OpenCalender();return(false);" />
</span>

<asp:HiddenField ID=hidDate runat=server />

<div id=<% =ucID%>divCal style="position: absolute; display: none; border: solid 1px black; width: 180px;">
    <% =CalData %>
</div>
<div id=<% =ucID%>divMonth style='border: solid 1px black; position: absolute; display: none; background-color: #FFFFCC; cursor: pointer'>
</div>
<div id=<% =ucID%>divUpDown style="position: absolute; display: none; width: 11px">
<table cellpadding=0 cellspacing=0 border=0 width=100%>
    <tr height=5px style="cursor: pointer"><td height=5px><img src="<%=ImageSpinUp%>" onclick='<% =ucID%>fn_AddYear(1)'/></td></tr>
    <tr height=1px><td height=1px></td></tr>
    <tr height=5px style="cursor: pointer"><td height=5px><img src="<%=ImageSpinDown%>" onclick='<% =ucID%>fn_AddYear(-1)'/></td></tr>
</table>
</div>

<script type="text/javascript">
var <% =ucID%>curDate, <% =ucID%>curMonth, <% =ucID%>curYear
var <% =ucID%>divCal = document.getElementById('<% =ucID%>divCal')
var <% =ucID%>divMonth = document.getElementById('<% =ucID%>divMonth')
var <% =ucID%>divUpDown = document.getElementById('<% =ucID%>divUpDown')
var <% =ucID%>txtDate = document.getElementById('<% =ucID%>txtDate') 
var <% =ucID%>prevCell
var <% =ucID%>DisplayFormat = <% =mDisplayFormat%>

function <% =ucID%>fn_MonthDrop()
{
    var x = "<table cellpadding=2 cellspacing=0 border=0>"
    var i;
    for ( i = 1 ; i <= 12 ; i++ )
       x = x + "<tr onclick='<% =ucID%>fn_MonthSelected(" + i + ")'><td align=left style='padding-left: 10px; padding-right: 10px; font-family: Trebuchet MS; font-size: 10pt;'>" + fn_GetMonthName(i) + "</td></tr>"
    x = x + "</table>"
    var sm = document.getElementById('<% =ucID%>spanMonth')
    <% =ucID%>divMonth.style.left = (fn_GetAbsoluteX(sm)) + 'px'
    <% =ucID%>divMonth.style.top = (fn_GetAbsoluteY(sm)+sm.offsetHeight+1) + 'px'
    <% =ucID%>divMonth.innerHTML = x
    <% =ucID%>divMonth.style.display = ''       
}

function <% =ucID%>fn_MonthSelected(pMonth)
{
    <% =ucID%>divMonth.style.display = 'none'
    <% =ucID%>curMonth = pMonth
    <% =ucID%>fn_PopulateCalender(<% =ucID%>curMonth, <% =ucID%>curYear)
}

function <% =ucID%>fn_PopulateCalender(pMonth, pYear)
{
    var d1 = new Date(pYear, pMonth-1, 8)
    var day = d1.getDay() + 1
    var i, j, k, m = 31, n = 0, leap, k1 = 0, k2 = 0
    var x;

    <% =ucID%>curMonth = pMonth;
    <% =ucID%>curYear = pYear;
    x = "<span id=<% =ucID%>spanMonth onclick='<% =ucID%>fn_MonthDrop()' style='cursor: pointer'>" + fn_GetMonthName(pMonth) + "</span>&nbsp;&nbsp;"
    x = x + "<span id=<% =ucID%>spanYear>" + pYear + "&nbsp;&nbsp;</span>"

    document.getElementById('<% =ucID%>tdMonth').innerHTML = x
    
    if ( pMonth == 1 || pMonth == 3 || pMonth == 5 || pMonth == 7 || pMonth == 8 || pMonth == 10 || pMonth == 12 )
        m = 31
    else if ( pMonth != 2 )
        m = 30
    else {
        leap = (pYear % 4 == 0 && (pYear % 100) != 0 || (pYear % 400) == 0)
        m = (leap == true ? 29 : 28)
    }        
                
    for ( i = 1 ; i <= 6; i++ ) {
        document.getElementById('<% =ucID%>tr'+i).style.display = ''            
        for ( j = 1; j <= 7; j++ ) {
            if ( j < day ) {
                document.getElementById('<% =ucID%>td'+i+j).innerHTML = '&nbsp;'
            }
            else {
                n = n+1;
                if ( n <= m )
                    document.getElementById('<% =ucID%>td'+i+j).innerHTML = "<span style='cursor: pointer' onclick='<% =ucID%>fn_DayClicked(this)'>" + n + "</span>"
                else {
                    document.getElementById('<% =ucID%>td'+i+j).innerHTML = '&nbsp;'
                    if ( k1 == 0 ) {
                        k1 = i;
                        if ( j > 1 )
                            k1++;
                    }                        
                }
            }
        }
        day = 1;
    }
    while ( k1 <= 6 ) {
        document.getElementById('<% =ucID%>tr'+k1).style.display = 'none'            
        k1++;
    }        
}

function <% =ucID%>fn_DayClicked(pObj)
{
    if ( <% =ucID%>prevCell )
        <% =ucID%>prevCell.style.fontWeight = 'normal'
    pObj.style.fontWeight = 'bold'
    <% =ucID%>prevCell = pObj
    var dd = pObj.innerHTML
    if ( dd.length < 2 )
        dd = '0' + dd;
    <% =ucID%>curDate = dd
    document.getElementById('<% =hidDate.ClientID%>').value = dd + '/' + (<% =ucID%>curMonth < 10 ? ('0'+<% =ucID%>curMonth) : <% =ucID%>curMonth) + '/' + <% =ucID%>curYear
    <% =ucID%>fn_StoreDate()
    <% =ucID%>divCal.style.display = 'none'
    <% =ucID%>divUpDown.style.display = 'none'
}

function <% =ucID%>fn_OpenCalender()
{
    var h;
	 if ( '<%=mEnabled%>' != 'Y' )
	 	  return;

    <% =ucID%>fn_ResetDivPosition()
    <% =ucID%>divCal.style.display = (<% =ucID%>divCal.style.display  == '' ? 'none' : '')
    <% =ucID%>divUpDown.style.display = <% =ucID%>divCal.style.display
    <% =ucID%>divUpDown.style.left = fn_GetAbsoluteX(document.getElementById('<% =ucID%>spanYear')) + document.getElementById('<% =ucID%>spanYear').offsetWidth + 'px'
    h = document.getElementById('<% =ucID%>spanYear').offsetHeight - <% =ucID%>divUpDown.offsetHeight;
    if ( h < 0  ) 
        h = 0
    h = h / 2
    <% =ucID%>divUpDown.style.top = fn_GetAbsoluteY(document.getElementById('<% =ucID%>spanYear')) + h + 2 + 'px'
}

function fn_GetAbsoluteX(pObj)
{
    var x = 0
    while ( pObj.tagName != 'BODY' && pObj.tagName != 'HTML' ) {
        x += pObj.offsetLeft;
        pObj = pObj.offsetParent;
    }
    return x;
}

function fn_GetAbsoluteY(pObj)
{
    var x = 0
    while ( pObj.tagName != 'BODY' && pObj.tagName != 'HTML' ) {
        x += pObj.offsetTop;
        pObj = pObj.offsetParent;
    }
    return x;
}

function fn_GetMonthName(pMonth)
{
    var MonthNames = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec "
    return(MonthNames.substr((pMonth-1)*4, 3))
}

function <% =ucID%>fn_AddMonth(pAdd)
{
    <% =ucID%>curMonth = <% =ucID%>curMonth + pAdd
    if ( <% =ucID%>curMonth < 1 ) {
        <% =ucID%>curYear = <% =ucID%>curYear - 1
        <% =ucID%>curMonth = 12
    }
    if ( <% =ucID%>curMonth > 12 ) {
        <% =ucID%>curYear = <% =ucID%>curYear + 1
        <% =ucID%>curMonth = 1
    }
    <% =ucID%>fn_PopulateCalender(<% =ucID%>curMonth, <% =ucID%>curYear)        
}

function <% =ucID%>fn_AddYear(pAdd)
{
    <% =ucID%>curYear = <% =ucID%>curYear + pAdd;
    <% =ucID%>fn_PopulateCalender(<% =ucID%>curMonth, <% =ucID%>curYear)        
}
window.setTimeout(fn_Render, 1)

function fn_Render()
{
    var i, hidVal

    <% =ucID%>divCal.style.color = '<% =mCalenderForeColor %>'
    <% =ucID%>divCal.style.backgroundColor = '<% =mCalenderBackColor %>'
    //document.getElementById('<% =ucID%>spanDate').style.width = '<% =mWidth %>'
    <% =ucID%>txtDate.style.width = '<% =mWidth %>'

    <% =ucID%>divCal.style.fontFamily = '<% =mFontFamily%>'
    <% =ucID%>divCal.style.fontSize = '<% =mFontSize%>'
    <% =ucID%>txtDate.style.fontFamily = <% =ucID%>divCal.style.fontFamily

    <% =ucID%>fn_ResetDivPosition()

    hidVal = document.getElementById('<% =hidDate.ClientID%>').value
    <% =ucID%>curDate = parseInt(hidVal.substr(0, 2), 10)
    <% =ucID%>curMonth = parseInt(hidVal.substr(3, 2), 10)
    <% =ucID%>curYear = parseInt(hidVal.substr(6, 4), 10)

    <% =ucID%>fn_StoreDate()
    <% =ucID%>fn_PopulateCalender(<% =ucID%>curMonth, <% =ucID%>curYear)
}

function <% =ucID%>fn_StoreDate()
{
    var hidVal

    hidVal = document.getElementById('<% =hidDate.ClientID%>').value
    <% =ucID%>curDate = parseInt(hidVal.substr(0, 2), 10)
    <% =ucID%>curMonth = parseInt(hidVal.substr(3, 2), 10)
    <% =ucID%>curYear = parseInt(hidVal.substr(6, 4), 10)
    if ( <% =ucID%>DisplayFormat == 0 ) {
        <% =ucID%>txtDate.value = hidVal
    }
    else if ( <% =ucID%>DisplayFormat == 1 ) {
        <% =ucID%>txtDate.value = hidVal.substr(0, 2) + ' ' + fn_GetMonthName(<% =ucID%>curMonth) + ' ' + hidVal.substr(6, 4)
    }
    else {
        var d = new Date(<% =ucID%>curYear, (<% =ucID%>curMonth - 1), <% =ucID%>curDate)
        <% =ucID%>txtDate.value = fn_GetWeekDay(d) + ' ' + hidVal.substr(0, 2) + ' ' + fn_GetMonthName(<% =ucID%>curMonth) + ' ' + hidVal.substr(6, 4)
    }
}

function fn_GetWeekDay(pDate)
{
    var d = pDate.getDay()
    var x = new Array("Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat");

    return x[d]
}

function <% =ucID%>fn_ResetDivPosition()
{
    var leftMargin = parseInt(document.body.leftMargin, 10)
    if ( document.body.style.marginLeft != '' ) {
        i = document.body.style.marginLeft.indexOf('px')
        leftMargin = parseInt(document.body.style.marginLeft.substr(0, i), 10)
    }        
    var topMargin = parseInt(document.body.topMargin, 10)
    if ( document.body.style.marginTop != '' ) {
        i = document.body.style.marginTop.indexOf('px')
        topMargin = parseInt(document.body.style.marginTop.substr(0, i), 10)
    }
    if ( navigator.userAgent.indexOf("Firefox") >= 1 || navigator.userAgent.indexOf("Safari") >= 1 ) {
        leftMargin = 0
        topMargin=0
    }
    <% =ucID%>divCal.style.left = (fn_GetAbsoluteX(<% =ucID%>txtDate)+leftMargin) + 'px'
    <% =ucID%>divCal.style.top = (fn_GetAbsoluteY(<% =ucID%>txtDate)+<% =ucID%>txtDate.offsetHeight+topMargin+2) + 'px'
	var x = document.getElementById('<% =ucID%>divCal').style.display
	document.getElementById('<% =ucID%>divCal').style.display = ''
    document.getElementById('<% =ucID%>divCal').style.width = (document.getElementById('<% =ucID%>tblCal').offsetWidth + 2) + 'px'
	document.getElementById('<% =ucID%>divCal').style.display = x
}

function <% =ucID%>SetDate(pDate)
{
	document.getElementById('<% =hidDate.ClientID%>').value = pDate
	<% =ucID%>fn_StoreDate()
}

function <% =ucID%>GetDate()
{
	return (document.getElementById('<% =hidDate.ClientID%>').value)
}

</script>
