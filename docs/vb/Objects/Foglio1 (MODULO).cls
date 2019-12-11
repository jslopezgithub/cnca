VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "Foglio1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = True

Private Sub Worksheet_SelectionChange(ByVal Target As Range)



If activecell.Address = "$E$8" Then
       macro1
   End If
   If activecell.Address = "$E$12" Then
       macro2
   End If
If activecell.Address = "$E$16" Then
   macro3
  End If
If activecell.Address = "$E$20" Then
      macro4
  End If
  If activecell.Address = "$E$24" Then
   macro5
End If
   If activecell.Address = "$E$28" Then
   macro6
  End If
  If activecell.Address = "$E$32" Then
  macro7
 End If

End Sub

Sub macro1()
UserForm1.Show
End Sub
Sub macro2()
UserForm2.Show
End Sub
Sub macro3()
UserForm3.Show
End Sub

Sub macro4()
UserForm4.Show
End Sub
Sub macro5()
UserForm5.Show
End Sub

Sub macro6()
UserForm6.Show
End Sub
Sub macro7()
UserForm7.Show
End Sub


    
