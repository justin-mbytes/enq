Option Strict On
Option Explicit On
Imports System.IO

Public Class Referral
   Inherits System.Web.UI.Page

   Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

   End Sub

   Protected Sub linkbtnSubmit_Click(sender As Object, e As EventArgs) Handles linkbtnSubmit.Click

      Dim GiftCard As String = hidGiftCard.Value

      Dim ReferrerFirstName As String = txtFirstName.Text.Trim
      Dim ReferrerLastName As String = txtLastName.Text.Trim
      Dim ReferrerEmail As String = txtEmail.Text.Trim
      Dim ReferrerPhoneNo As String = txtPhone.Text.Trim

      'Expected format in hidReferralInfo = RefferalName1,PhoneNo1,NoChildren1|RefferalName2,PhoneNo2,NoChildren2|RefferalName3,PhoneNo3,NoChildren3 ...
      Dim ReferralData() As String = hidReferralInfo.Value.Split(CChar("|"))

      'Send a mail to Jonathan with CSV file as attachment. The CSV file contains the referrer and referral information.
      Dim SmtpHost As String = "smtp.office365.com"
      Dim SmtpPort As Integer = 587
      Dim FromAddress As String = "outgoing@m-bytes.com"
      Dim PassWord As String = "eLwa506_13"
      Dim ToAddress As String = "leads@kineticeducation.com.au"
      '
      Dim Subject As String = "Kinetic Education referral from " & ReferrerFirstName & " " & ReferrerLastName & "."

      Dim EmailBody As String = ""
      Dim CSVFile As String = ""

      EmailBody = "Hi," & vbCrLf & vbCrLf
      EmailBody &= "The attached CSV file contains the referrer and referral information entered at www.kineticeducation.com.au." & vbCrLf & vbCrLf
      EmailBody &= "Thanks," & vbCrLf
      EmailBody &= "Auto-generated mail from KE website."

      CSVFile = "Name,PhoneNo,No. Of Children,referrer name,referrer last,referrer email,referrer phone,gift,comment"

      For i As Integer = 0 To ReferralData.Length - 1
         Dim ReferralName As String = ReferralData(i).Split(CChar(","))(0)
         Dim ReferralPhoneNo As String = ReferralData(i).Split(CChar(","))(1)
         Dim ReferralNoChildren As String = ReferralData(i).Split(CChar(","))(2)

         CSVFile &= Environment.NewLine
         CSVFile &= ReferralName & "," & ReferralPhoneNo & "," & ReferralNoChildren & "," & ReferrerFirstName & "," & ReferrerLastName & "," & ReferrerEmail & "," & ReferralPhoneNo & "," & GiftCard & ",Referrred by " & ReferrerFirstName & " " & ReferrerLastName & ". Number of children " & ReferralNoChildren & "."
      Next

      Dim CSVMemoryStream As MemoryStream = New MemoryStream(ASCIIEncoding.Default.GetBytes(CSVFile))
      Dim FileName As String = ReferrerFirstName & "_" & ReferrerLastName & ".csv"

      Dim MailSent As Boolean = CommonFunctions.SendMail(SmtpHost, SmtpPort, FromAddress, PassWord, ToAddress, Subject, EmailBody, False, CSVMemoryStream, FileName)

      Response.Redirect("thanks.html", False)

   End Sub

End Class

