Attribute VB_Name = "Modulo7"
Sub SendFoglio()
Sheets("REGISTRO").Copy

ActiveWorkbook.SendMail _
Recipients:="serviziocivile@cnca.it", Subject:="orario volontario"
ActiveWindow.Close SaveChanges:=False
End Sub

