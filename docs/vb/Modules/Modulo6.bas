Attribute VB_Name = "Modulo6"
Sub Pulsante4_Click()
Sub SalvaInPDF()
Dim ws As Worksheet
Dim strIndirizzo As String
Dim strFile As String

 
Set ws = ActiveSheet

   
    varNomeFile = Application.InputBox(Prompt:="Scrivi il nome del file PDF", _
        Title:="Nome dal file PDF da salvare", _
        Type:=2)
       
    If varNomeFile = False Then Exit Sub
    If Len(varNomeFile & vbNullString) = 0 Then Exit Sub
   
    ActiveSheet.ExportAsFixedFormat _
        Type:=xlTypePDF, _
        Filename:=cPath & varNomeFile, _
        Quality:=xlQualityStandard, _
        OpenAfterPublish:=True
       
End Sub

