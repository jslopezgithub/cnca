VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} UserForm7 
   Caption         =   "UserForm7"
   ClientHeight    =   6945
   ClientLeft      =   40
   ClientTop       =   380
   ClientWidth     =   9400.001
   OleObjectBlob   =   "UserForm7.frx":0000
   StartUpPosition =   1  'CenterOwner
End
Attribute VB_Name = "UserForm7"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub UserForm_Activate()
Label1.Caption = Range("A32")
Label3.Caption = Range("B32")
End Sub

Private Sub TextBox1_Change()

X = Len(TextBox1)
Y = LTrim(TextBox1.Text)
D = TextBox1
If D = "" Then
TextBox1.BackColor = &HFFFFFF
Exit Sub
End If

If Left(D, 2) > 24 Then
MsgBox "Ora Errata"
TextBox1.SelStart = 0
TextBox1.SelLength = Len(TextBox1)
Exit Sub
End If
If X = 2 Then TextBox1 = Y & ":"
If X = 4 Then Exit Sub

If Mid(D, 4, 2) = "" Then Exit Sub
If Mid(D, 4, 2) > 59 Then
MsgBox "Minuti Errati"
TextBox1.SelStart = 3
TextBox1.SelLength = Len(TextBox1)
Exit Sub
End If

If X = 5 Then
TextBox2.SetFocus 'il cursore si sposta su una seconda textbox al fine di far partire "Private Sub textbox1_Exit"
End If
Exit Sub

Resume
End Sub

Private Sub TextBox2_Change()

X = Len(TextBox2)
Y = LTrim(TextBox2.Text)
D = TextBox2
If D = "" Then
TextBox2.BackColor = &HFFFFFF
Exit Sub
End If
If Left(D, 2) > 24 Then
MsgBox "Ora Errata"
TextBox2.SelStart = 0
TextBox2.SelLength = Len(TextBox2)
Exit Sub
End If
If X = 2 Then TextBox2 = Y & ":"
If X = 4 Then Exit Sub

If Mid(D, 4, 2) = "" Then Exit Sub
If Mid(D, 4, 2) > 59 Then 'ora controlliamo che il mese non superi il numero 12, si avvisa, si esce
MsgBox "Minuti Errati"
TextBox2.SelStart = 3
TextBox2.SelLength = Len(TextBox2)
Exit Sub
End If


If X = 5 Then
TextBox3.SetFocus 'il cursore si sposta su una seconda textbox al fine di far partire "Private Sub textbox1_Exit"
End If
Exit Sub

Resume
End Sub
Private Sub TextBox3_Change()

X = Len(TextBox3)
Y = LTrim(TextBox3.Text)
D = TextBox3
If D = "" Then
TextBox3.Text = "00:00"
Exit Sub
End If
If Left(D, 2) > 24 Then
MsgBox "Ora Errata"
TextBox3.SelStart = 0
TextBox3.SelLength = Len(TextBox1)
Exit Sub
End If
If X = 2 Then TextBox3 = Y & ":"
If X = 4 Then Exit Sub

If Mid(D, 4, 2) = "" Then Exit Sub
If Mid(D, 4, 2) > 59 Then
MsgBox "Minuti Errati"
TextBox3.SelStart = 3
TextBox3.SelLength = Len(TextBox3)
Exit Sub
End If


If X = 5 Then
TextBox4.SetFocus 'il cursore si sposta su una seconda textbox al fine di far partire "Private Sub textbox1_Exit"
End If
Exit Sub

Resume
End Sub

Private Sub TextBox4_Change()

X = Len(TextBox4)
Y = LTrim(TextBox4.Text)
D = TextBox4
If D = "" Then
TextBox4.BackColor = &HFFFFFF
Exit Sub
End If
If Left(D, 2) > 24 Then
MsgBox "Ora Errata"
TextBox4.SelStart = 0
TextBox4.SelLength = Len(TextBox4)
Exit Sub
End If
If X = 2 Then TextBox4 = Y & ":"
If X = 4 Then Exit Sub

If Mid(D, 4, 2) = "" Then Exit Sub
If Mid(D, 4, 2) > 59 Then 'ora controlliamo che il mese non superi il numero 12, si avvisa, si esce
MsgBox "Minuti Errati"
TextBox4.SelStart = 3
TextBox4.SelLength = Len(TextBox4)
Exit Sub
End If


If X = 5 Then
TextBox5.SetFocus 'il cursore si sposta su una seconda textbox al fine di far partire "Private Sub textbox1_Exit"
End If
Exit Sub

Resume
End Sub


Private Sub TextBox5_Change()

X = Len(TextBox5)
Y = LTrim(TextBox5.Text)
D = TextBox5
If D = "" Then
TextBox5.BackColor = &HFFFFFF
Exit Sub
End If
If Left(D, 2) > 24 Then
MsgBox "Ora Errata"
TextBox5.SelStart = 0
TextBox5.SelLength = Len(TextBox5)
Exit Sub
End If
If X = 2 Then TextBox5 = Y & ":"
If X = 4 Then Exit Sub

If Mid(D, 4, 2) = "" Then Exit Sub
If Mid(D, 4, 2) > 59 Then
MsgBox "Minuti Errati"
TextBox5.SelStart = 3
TextBox5.SelLength = Len(TextBox5)
Exit Sub
End If


If X = 5 Then
TextBox6.SetFocus 'il cursore si sposta su una seconda textbox al fine di far partire "Private Sub TextBox5_Exit"
End If
Exit Sub

Resume
End Sub

Private Sub TextBox6_Change()

X = Len(TextBox6)
Y = LTrim(TextBox6.Text)
D = TextBox6
If D = "" Then
TextBox6.BackColor = &HFFFFFF
Exit Sub
End If
If Left(D, 2) > 24 Then
MsgBox "Ora Errata"
TextBox6.SelStart = 0
TextBox6.SelLength = Len(TextBox6)
Exit Sub
End If
If X = 2 Then TextBox6 = Y & ":"
If X = 4 Then Exit Sub

If Mid(D, 4, 2) = "" Then Exit Sub
If Mid(D, 4, 2) > 59 Then 'ora controlliamo che il mese non superi il numero 12, si avvisa, si esce
MsgBox "Minuti Errati"
TextBox6.SelStart = 3
TextBox6.SelLength = Len(TextBox6)
Exit Sub
End If


If X = 5 Then
TextBox6.SetFocus 'il cursore si sposta su una seconda textbox al fine di far partire "Private Sub TextBox5_Exit"
End If
Exit Sub

Resume
End Sub
Private Sub CommandButton1_Click()

Range("E32").Value = TextBox1
Range("G32").Value = TextBox2

Range("E33").Value = TextBox3
Range("G33").Value = TextBox4

Range("E34").Value = TextBox5
Range("G34").Value = TextBox6

UserForm7.Hide

End Sub

