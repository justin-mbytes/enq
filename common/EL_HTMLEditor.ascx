<%@ control language="VB" autoeventwireup="false" inherits="Common_EL_HTMLEditor, App_Web_gskr5llg" %>
<script src="../JavaScripts/EL_Functions.js" type="text/javascript"></script>

<table border="0" cellspacing="0" cellpadding="0" style='border: <% =mBorder%>' width=100%>
	<tr>
		<td width=<% =mWidth%> align="left" valign="middle" style='background-color: #eeeeee; padding: 2px; border-bottom: <% =mBorder%>;'>
			<span id="<% =ucID%>tool1" onmouseover="fnActiveTool(1)" onmouseout="fnNormalTool(1)"  onclick="fn_ExecCommand('bold', true);"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/Bold.GIF" width="23" height="20" alt="Bold" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool2" onmouseover="fnActiveTool(2)" onmouseout="fnNormalTool(2)" onclick="fn_ExecCommand('italic', true);"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE;">
				<img src="../Images/Italic.GIF" width="23" height="20" alt="Italic" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool3" onmouseover="fnActiveTool(3)" onmouseout="fnNormalTool(3)" onclick="fn_ExecCommand('underline', true);"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/UnderLine.GIF" width="23" height="20" alt="Underline" align="absmiddle">
			</span>
			<select id='<% =ucID%>ddlSize' onchange="fn_SetAttribute(this, 'fontSize')">
				<option value=""></option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
			</select>
			<select id='<% =ucID%>ddlFont' onchange="fn_SetAttribute(this, 'fontName')">
				<option value=""></option>
				<option value="Arial">Arial</option>
				<option value="Calibri">Calibri</option>
				<option value="Comic Sans MS">Comic Sans MS</option>
				<option value="Courier New">Courier New</option>
				<option value="Tahoma">Tahoma</option>
				<option value="Times New Roman">Times New Roman</option>
				<option value="Trebuchet MS">Trebuchet MS</option>
				<option value="Verdana">Verdana</option>
			</select>			
			<span id="<% =ucID%>tool4" onmouseover="fnActiveTool(4)" onmouseout="fnNormalTool(4)" onclick="fn_ShowColor(this, 'foreColor')"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/FgColor.GIF" width="23" height="20" alt="Text Color" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool5" onmouseover="fnActiveTool(5)" onmouseout="fnNormalTool(5)" onclick="fn_ShowColor(this, 'backColor')"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/BGColor.GIF" width="23" height="20" alt="Highlight Color" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool6" onmouseover="fnActiveTool(6)" onmouseout="fnNormalTool(6)" onclick="fn_ExecCommand('justifyLeft', true)"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/justifyLeft.gif" width="23" height="20" alt="Justify Left" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool7" onmouseover="fnActiveTool(7)" onmouseout="fnNormalTool(7)" onclick="fn_ExecCommand('justifyCenter', true)"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/justifyCenter.gif" width="23" height="20" alt="Justify Center" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool8" onmouseover="fnActiveTool(8)" onmouseout="fnNormalTool(8)" onclick="fn_ExecCommand('justifyRight', true)"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/justifyRight.gif" width="23" height="20" alt="Justify Right" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool9" onmouseover="fnActiveTool(9)" onmouseout="fnNormalTool(9)" onclick="fn_ExecCommand('justifyFull', true)"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/justifyFull.gif" width="23" height="20" alt="Justify Full" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool10" onmouseover="fnActiveTool(10)" onmouseout="fnNormalTool(10)" onclick="fn_ExecCommand('insertUnorderedList', true)"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/listUnordered.gif" width="23" height="20" alt="Bullets" align="absmiddle">
			</span>
			<span id="<% =ucID%>tool11" onmouseover="fnActiveTool(11)" onmouseout="fnNormalTool(11)" onclick="fn_ExecCommand('insertOrderedList', true)"
				style="cursor: hand; border: 1px solid; border-color: #EEEEEE; ">
				<img src="../Images/listOrdered.gif" width="23" height="20" alt="Numbering" align="absmiddle">
			</span>
		</td>
	</tr>
	<tr>
		<td >
			<iframe frameborder=0 marginheight="5px" marginwidth="5px"  id='<% =ucID%>editor' style='width: 100%; height: <% =mHeight%>;' contenteditable="true"></iframe>
		</td>
	</tr>
</table>
<asp:HiddenField ID='hidValue' runat='server' />

<script type="text/javascript">
var <% =ucID%>FrameDoc
var tool = '<% =ucID%>tool'
var hidValue = document.getElementById('<% =hidValue.ClientID%>')
var ColorFor 
var AutoAdjustHeight = '<% =mAutoAdjustHeight %>'

function fnActiveTool(pIndex) 
{
	document.getElementById(tool + pIndex).style.borderColor = "#000091";
	document.getElementById(tool + pIndex).style.backgroundColor = "#C4C4FF"  //"#B9B9FF";
}

function fnNormalTool(pIndex) 
{
	document.getElementById(tool + pIndex).style.borderColor = "#EEEEEE";
	document.getElementById(tool + pIndex).style.backgroundColor = "#EEEEEE";
}

function fn_ExecCommand(pCmd, pPar1) 
{
	<% =ucID%>FrameDoc.execCommand(pCmd, false, pPar1)
	fn_RefreshText()
}

function fn_RefreshText()
{
	hidValue.value = <% =ucID%>FrameDoc.body.innerHTML
	if ( AutoAdjustHeight == 'Y' ) {
		var h = <% =ucID%>FrameDoc.body.scrollHeight
		h = (h < 100 ? 100 : h)
		document.getElementById('<% =ucID%>editor').style.height = h + 'px'
	}
}

function fn_SetAttribute(pObj, pWhat)
{
	if ( pObj.options[pObj.selectedIndex].value != '' )
		fn_ExecCommand(pWhat, pObj.options[pObj.selectedIndex].value)
}

function <% =ucID%>load() 
{
	if (gfn_GetBrowser() == 'ie') {
		<% =ucID%>FrameDoc = document.frames['<% =ucID%>editor'].document
	}
	else {
		<% =ucID%>FrameDoc = document.getElementById('<% =ucID%>editor').contentDocument
	}
	<% =ucID%>FrameDoc.designMode = "On";
	window.setTimeout(<% =ucID%>load2, 100)
}

function <% =ucID%>load2() 
{
	<% =ucID%>FrameDoc.body.innerHTML = hidValue.value
}

window.setTimeout(<% =ucID%>load, 100)
window.setInterval(fn_RefreshText, 500)

function fn_ShowColor(pObj, pColorFor)
{
	var x = gfn_GetAbsoluteX(pObj)
	var y = gfn_GetAbsoluteY(pObj) + pObj.offsetHeight
	var div = document.getElementById('divColor')
	div.style.display = (document.getElementById('divColor').style.display == '' ? 'none' : '')
	div.style.left = x + 'px'
	div.style.top = y + 'px'
	ColorFor = pColorFor
}

function fn_SetSelectedColor(pObj)
{
	fn_ExecCommand(ColorFor, pObj.style.backgroundColor)
	document.getElementById('divColor').style.display = 'none'
}

var colors = new Array("#000000", "#000033", "#000066", "#000099", "#0000CC", "#0000FF", "#330000", "#330033", "#330066", "#330099", "#3300CC",
                        "#3300FF", "#660000", "#660033", "#660066", "#660099", "#6600CC", "#6600FF", "#990000", "#990033", "#990066", "#990099",
                        "#9900CC", "#9900FF", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#FF0000", "#FF0033", "#FF0066",
                        "#FF0099", "#FF00CC", "#FF00FF", "#003300", "#003333", "#003366", "#003399", "#0033CC", "#0033FF", "#333300", "#333333",
                        "#333366", "#333399", "#3333CC", "#3333FF", "#663300", "#663333", "#663366", "#663399", "#6633CC", "#6633FF", "#993300",
                        "#993333", "#993366", "#993399", "#9933CC", "#9933FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF",
                        "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#006600", "#006633", "#006666", "#006699", "#0066CC",
                        "#0066FF", "#336600", "#336633", "#336666", "#336699", "#3366CC", "#3366FF", "#666600", "#666633", "#666666", "#666699",
                        "#6666CC", "#6666FF", "#996600", "#996633", "#996666", "#996699", "#9966CC", "#9966FF", "#CC6600", "#CC6633", "#CC6666",
                        "#CC6699", "#CC66CC", "#CC66FF", "#FF6600", "#FF6633", "#FF6666", "#FF6699", "#FF66CC", "#FF66FF", "#009900", "#009933",
                        "#009966", "#009999", "#0099CC", "#0099FF", "#339900", "#339933", "#339966", "#339999", "#3399CC", "#3399FF", "#669900",
                        "#669933", "#669966", "#669999", "#6699CC", "#6699FF", "#999900", "#999933", "#999966", "#999999", "#9999CC", "#9999FF",
                        "#CC9900", "#CC9933", "#CC9966", "#CC9999", "#CC99CC", "#CC99FF", "#FF9900", "#FF9933", "#FF9966", "#FF9999", "#FF99CC",
                        "#FF99FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#33CC00", "#33CC33", "#33CC66", "#33CC99",
                        "#33CCCC", "#33CCFF", "#66CC00", "#66CC33", "#66CC66", "#66CC99", "#66CCCC", "#66CCFF", "#99CC00", "#99CC33", "#99CC66",
                        "#99CC99", "#99CCCC", "#99CCFF", "#CCCC00", "#CCCC33", "#CCCC66", "#CCCC99", "#CCCCCC", "#CCCCFF", "#FFCC00", "#FFCC33",
                        "#FFCC66", "#FFCC99", "#FFCCCC", "#FFCCFF", "#00FF00", "#00FF33", "#00FF66", "#00FF99", "#00FFCC", "#00FFFF", "#33FF00",
                        "#33FF33", "#33FF66", "#33FF99", "#33FFCC", "#33FFFF", "#66FF00", "#66FF33", "#66FF66", "#66FF99", "#66FFCC", "#66FFFF",
                        "#99FF00", "#99FF33", "#99FF66", "#99FF99", "#99FFCC", "#99FFFF", "#CCFF00", "#CCFF33", "#CCFF66", "#CCFF99", "#CCFFCC",
                        "#CCFFFF", "#FFFF00", "#FFFF33", "#FFFF66", "#FFFF99", "#FFFFCC", "#FFFFFF");

var total = colors.length;
var width = 18;
var cp_contents = "<div id='divColor' style='position: absolute; top: 0px; display: none'>";
cp_contents += "<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0 WIDTH=280px;>";
var use_highlight = (document.getElementById || document.all) ? true : false;
for (var i = 0; i < total; i++) {
   if ((i % width) == 0) { cp_contents += "<TR><td width=5px></td>"; }
   cp_contents += "<TD style='border: solid 1px white;'>"
	cp_contents += "<input type=button onclick='fn_SetSelectedColor(this)' style='width: 16px; cursor: pointer; border: none; background-color: " + colors[i] + "' />" 
	cp_contents += "</TD>";
   if (((i + 1) >= total) || (((i + 1) % width) == 0)) {
      cp_contents += "</TR>";
   }
}
cp_contents += "</TABLE>"
document.write(cp_contents)
</script>
