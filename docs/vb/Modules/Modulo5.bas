Attribute VB_Name = "Modulo5"
Option Explicit

Sub doppia()

Call copiadati
Call selecta
End Sub

Sub copiadati()
'
' prov_copia Macro
'

   Dim lr As Long

  '--- determina la prima riga disponibile del foglio ARCHIVIO
  lr = Sheets("REGISTRO").Cells(Rows.Count, "B").End(xlUp).Row + 1

  '--- tanto per capire:
  '--- l'operatore & o di concatenamento, è utilizzato per concatenare due stringhe
  '--- se lr=25  il risultato di questa "A" & lr & ":B" & lr   sarà "A25:B25"

    '--- modifica tutte le righe come sopra specificato
  
  Sheets("MODULO").Range("A8").Copy Sheets("REGISTRO").Range("B" & lr)
  Sheets("MODULO").Range("C8").Copy Sheets("REGISTRO").Range("D" & lr)
  Sheets("REGISTRO").Range("C" & lr).Value = Sheets("MODULO").Range("B8").Value
  Sheets("MODULO").Range("B10").Copy Sheets("REGISTRO").Range("R" & lr)
    ' Sheets("INIZIO").Range("B7").Copy Sheets("Foglio1").Range("D" & lr)
  ' Sheets("INIZIO").Range("B8").Copy Sheets("Foglio1").Range("E" & lr)
  '
     
   Sheets("REGISTRO").Range("E" & lr).Value = Sheets("MODULO").Range("E8").Value
   Sheets("REGISTRO").Range("F" & lr).Value = Sheets("MODULO").Range("G8").Value
   Sheets("REGISTRO").Range("G" & lr).Value = Sheets("MODULO").Range("E9").Value
    Sheets("REGISTRO").Range("H" & lr).Value = Sheets("MODULO").Range("G9").Value
   Sheets("REGISTRO").Range("I" & lr).Value = Sheets("MODULO").Range("E10").Value
    Sheets("REGISTRO").Range("J" & lr).Value = Sheets("MODULO").Range("G10").Value
    
    Sheets("REGISTRO").Range("K" & lr).Value = Sheets("MODULO").Range("J8").Value

    Sheets("REGISTRO").Range("L" & lr).Value = Sheets("MODULO").Range("H8").Value
    Sheets("REGISTRO").Range("M" & lr).Value = Sheets("MODULO").Range("I8").Value
    Sheets("REGISTRO").Range("N" & lr).Value = Sheets("MODULO").Range("H9").Value
    Sheets("REGISTRO").Range("O" & lr).Value = Sheets("MODULO").Range("I9").Value
    Sheets("REGISTRO").Range("P" & lr).Value = Sheets("MODULO").Range("H10").Value
   Sheets("REGISTRO").Range("Q" & lr).Value = Sheets("MODULO").Range("I10").Value
   
' Sheets("Foglio1").Range("K" & lr).Value = Sheets("RIEPILOGO").Range("C50").Value
' Sheets("INIZIO").Range("B9").Copy Sheets("Foglio1").Range("L" & lr)
' Sheets("INIZIO").Range("B10").Copy Sheets("Foglio1").Range("M" & lr)

'MARTEDì

    lr = Sheets("REGISTRO").Cells(Rows.Count, "B").End(xlUp).Row + 1
    Sheets("MODULO").Range("A12").Copy Sheets("REGISTRO").Range("B" & lr)
  Sheets("MODULO").Range("C12").Copy Sheets("REGISTRO").Range("D" & lr)
  Sheets("REGISTRO").Range("C" & lr).Value = Sheets("MODULO").Range("B12").Value
  
  Sheets("REGISTRO").Range("E" & lr).Value = Sheets("MODULO").Range("E12").Value
   Sheets("REGISTRO").Range("F" & lr).Value = Sheets("MODULO").Range("G12").Value
   Sheets("REGISTRO").Range("G" & lr).Value = Sheets("MODULO").Range("E13").Value
    Sheets("REGISTRO").Range("H" & lr).Value = Sheets("MODULO").Range("G13").Value
   Sheets("REGISTRO").Range("I" & lr).Value = Sheets("MODULO").Range("E14").Value
    Sheets("REGISTRO").Range("J" & lr).Value = Sheets("MODULO").Range("G14").Value
    
    Sheets("REGISTRO").Range("K" & lr).Value = Sheets("MODULO").Range("J12").Value

    Sheets("REGISTRO").Range("L" & lr).Value = Sheets("MODULO").Range("H12").Value
    Sheets("REGISTRO").Range("M" & lr).Value = Sheets("MODULO").Range("I12").Value
    Sheets("REGISTRO").Range("N" & lr).Value = Sheets("MODULO").Range("H13").Value
    Sheets("REGISTRO").Range("O" & lr).Value = Sheets("MODULO").Range("I13").Value
    Sheets("REGISTRO").Range("P" & lr).Value = Sheets("MODULO").Range("H14").Value
   Sheets("REGISTRO").Range("Q" & lr).Value = Sheets("MODULO").Range("I14").Value
   Sheets("MODULO").Range("B14").Copy Sheets("REGISTRO").Range("R" & lr)
   
'MERCOLEDì

lr = Sheets("REGISTRO").Cells(Rows.Count, "B").End(xlUp).Row + 1
    Sheets("MODULO").Range("A16").Copy Sheets("REGISTRO").Range("B" & lr)
  Sheets("MODULO").Range("C16").Copy Sheets("REGISTRO").Range("D" & lr)
  Sheets("REGISTRO").Range("C" & lr).Value = Sheets("MODULO").Range("B16").Value
  
  Sheets("REGISTRO").Range("E" & lr).Value = Sheets("MODULO").Range("E16").Value
   Sheets("REGISTRO").Range("F" & lr).Value = Sheets("MODULO").Range("G16").Value
   Sheets("REGISTRO").Range("G" & lr).Value = Sheets("MODULO").Range("E17").Value
    Sheets("REGISTRO").Range("H" & lr).Value = Sheets("MODULO").Range("G17").Value
   Sheets("REGISTRO").Range("I" & lr).Value = Sheets("MODULO").Range("E18").Value
    Sheets("REGISTRO").Range("J" & lr).Value = Sheets("MODULO").Range("G18").Value
    
    Sheets("REGISTRO").Range("K" & lr).Value = Sheets("MODULO").Range("J16").Value

    Sheets("REGISTRO").Range("L" & lr).Value = Sheets("MODULO").Range("H16").Value
    Sheets("REGISTRO").Range("M" & lr).Value = Sheets("MODULO").Range("I16").Value
    Sheets("REGISTRO").Range("N" & lr).Value = Sheets("MODULO").Range("H17").Value
    Sheets("REGISTRO").Range("O" & lr).Value = Sheets("MODULO").Range("I17").Value
    Sheets("REGISTRO").Range("P" & lr).Value = Sheets("MODULO").Range("H18").Value
   Sheets("REGISTRO").Range("Q" & lr).Value = Sheets("MODULO").Range("I18").Value
    Sheets("MODULO").Range("B18").Copy Sheets("REGISTRO").Range("R" & lr)
    'GIOVEDì
    
    lr = Sheets("REGISTRO").Cells(Rows.Count, "B").End(xlUp).Row + 1
    Sheets("MODULO").Range("A20").Copy Sheets("REGISTRO").Range("B" & lr)
  Sheets("MODULO").Range("C20").Copy Sheets("REGISTRO").Range("D" & lr)
  Sheets("REGISTRO").Range("C" & lr).Value = Sheets("MODULO").Range("B20").Value
  
  Sheets("REGISTRO").Range("E" & lr).Value = Sheets("MODULO").Range("E20").Value
   Sheets("REGISTRO").Range("F" & lr).Value = Sheets("MODULO").Range("G20").Value
   Sheets("REGISTRO").Range("G" & lr).Value = Sheets("MODULO").Range("E21").Value
    Sheets("REGISTRO").Range("H" & lr).Value = Sheets("MODULO").Range("G21").Value
   Sheets("REGISTRO").Range("I" & lr).Value = Sheets("MODULO").Range("E22").Value
    Sheets("REGISTRO").Range("J" & lr).Value = Sheets("MODULO").Range("G22").Value
    
    Sheets("REGISTRO").Range("K" & lr).Value = Sheets("MODULO").Range("J20").Value

    Sheets("REGISTRO").Range("L" & lr).Value = Sheets("MODULO").Range("H20").Value
    Sheets("REGISTRO").Range("M" & lr).Value = Sheets("MODULO").Range("I20").Value
    Sheets("REGISTRO").Range("N" & lr).Value = Sheets("MODULO").Range("H21").Value
    Sheets("REGISTRO").Range("O" & lr).Value = Sheets("MODULO").Range("I21").Value
    Sheets("REGISTRO").Range("P" & lr).Value = Sheets("MODULO").Range("H22").Value
   Sheets("REGISTRO").Range("Q" & lr).Value = Sheets("MODULO").Range("I22").Value
    Sheets("MODULO").Range("B22").Copy Sheets("REGISTRO").Range("R" & lr)
       'VENERDì
    
    lr = Sheets("REGISTRO").Cells(Rows.Count, "B").End(xlUp).Row + 1
    Sheets("MODULO").Range("A24").Copy Sheets("REGISTRO").Range("B" & lr)
  Sheets("MODULO").Range("C24").Copy Sheets("REGISTRO").Range("D" & lr)
  Sheets("REGISTRO").Range("C" & lr).Value = Sheets("MODULO").Range("B24").Value
  
  Sheets("REGISTRO").Range("E" & lr).Value = Sheets("MODULO").Range("E24").Value
   Sheets("REGISTRO").Range("F" & lr).Value = Sheets("MODULO").Range("G24").Value
   Sheets("REGISTRO").Range("G" & lr).Value = Sheets("MODULO").Range("E25").Value
    Sheets("REGISTRO").Range("H" & lr).Value = Sheets("MODULO").Range("G25").Value
   Sheets("REGISTRO").Range("I" & lr).Value = Sheets("MODULO").Range("E26").Value
    Sheets("REGISTRO").Range("J" & lr).Value = Sheets("MODULO").Range("G26").Value
    
    Sheets("REGISTRO").Range("K" & lr).Value = Sheets("MODULO").Range("J24").Value

    Sheets("REGISTRO").Range("L" & lr).Value = Sheets("MODULO").Range("H24").Value
    Sheets("REGISTRO").Range("M" & lr).Value = Sheets("MODULO").Range("I24").Value
    Sheets("REGISTRO").Range("N" & lr).Value = Sheets("MODULO").Range("H25").Value
    Sheets("REGISTRO").Range("O" & lr).Value = Sheets("MODULO").Range("I25").Value
    Sheets("REGISTRO").Range("P" & lr).Value = Sheets("MODULO").Range("H26").Value
   Sheets("REGISTRO").Range("Q" & lr).Value = Sheets("MODULO").Range("I26").Value
   Sheets("MODULO").Range("B26").Copy Sheets("REGISTRO").Range("R" & lr)
   
   'SABATO
   
   lr = Sheets("REGISTRO").Cells(Rows.Count, "B").End(xlUp).Row + 1
    Sheets("MODULO").Range("A28").Copy Sheets("REGISTRO").Range("B" & lr)
  Sheets("MODULO").Range("C28").Copy Sheets("REGISTRO").Range("D" & lr)
  Sheets("REGISTRO").Range("C" & lr).Value = Sheets("MODULO").Range("B28").Value
  
  Sheets("REGISTRO").Range("E" & lr).Value = Sheets("MODULO").Range("E28").Value
   Sheets("REGISTRO").Range("F" & lr).Value = Sheets("MODULO").Range("G28").Value
   Sheets("REGISTRO").Range("G" & lr).Value = Sheets("MODULO").Range("E29").Value
    Sheets("REGISTRO").Range("H" & lr).Value = Sheets("MODULO").Range("G29").Value
   Sheets("REGISTRO").Range("I" & lr).Value = Sheets("MODULO").Range("E30").Value
    Sheets("REGISTRO").Range("J" & lr).Value = Sheets("MODULO").Range("G30").Value
    
    Sheets("REGISTRO").Range("K" & lr).Value = Sheets("MODULO").Range("J28").Value

    Sheets("REGISTRO").Range("L" & lr).Value = Sheets("MODULO").Range("H28").Value
    Sheets("REGISTRO").Range("M" & lr).Value = Sheets("MODULO").Range("I28").Value
    Sheets("REGISTRO").Range("N" & lr).Value = Sheets("MODULO").Range("H29").Value
    Sheets("REGISTRO").Range("O" & lr).Value = Sheets("MODULO").Range("I29").Value
    Sheets("REGISTRO").Range("P" & lr).Value = Sheets("MODULO").Range("H30").Value
   Sheets("REGISTRO").Range("Q" & lr).Value = Sheets("MODULO").Range("I30").Value
   Sheets("MODULO").Range("B30").Copy Sheets("REGISTRO").Range("R" & lr)
   
   'DOMENICA
   lr = Sheets("REGISTRO").Cells(Rows.Count, "B").End(xlUp).Row + 1
    Sheets("MODULO").Range("A32").Copy Sheets("REGISTRO").Range("B" & lr)
  Sheets("MODULO").Range("C32").Copy Sheets("REGISTRO").Range("D" & lr)
  Sheets("REGISTRO").Range("C" & lr).Value = Sheets("MODULO").Range("B32").Value
  
  Sheets("REGISTRO").Range("E" & lr).Value = Sheets("MODULO").Range("E32").Value
   Sheets("REGISTRO").Range("F" & lr).Value = Sheets("MODULO").Range("G32").Value
   Sheets("REGISTRO").Range("G" & lr).Value = Sheets("MODULO").Range("E33").Value
    Sheets("REGISTRO").Range("H" & lr).Value = Sheets("MODULO").Range("G33").Value
   Sheets("REGISTRO").Range("I" & lr).Value = Sheets("MODULO").Range("E34").Value
    Sheets("REGISTRO").Range("J" & lr).Value = Sheets("MODULO").Range("G34").Value
    
    Sheets("REGISTRO").Range("K" & lr).Value = Sheets("MODULO").Range("J32").Value

    Sheets("REGISTRO").Range("L" & lr).Value = Sheets("MODULO").Range("H32").Value
    Sheets("REGISTRO").Range("M" & lr).Value = Sheets("MODULO").Range("I32").Value
    Sheets("REGISTRO").Range("N" & lr).Value = Sheets("MODULO").Range("H33").Value
    Sheets("REGISTRO").Range("O" & lr).Value = Sheets("MODULO").Range("I33").Value
    Sheets("REGISTRO").Range("P" & lr).Value = Sheets("MODULO").Range("H34").Value
   Sheets("REGISTRO").Range("Q" & lr).Value = Sheets("MODULO").Range("I34").Value
   Sheets("MODULO").Range("B34").Copy Sheets("REGISTRO").Range("R" & lr)
   
  
    
End Sub



Sub selecta()
Sheets("MODULO").Select
Range("B5").Select
    Selection.ClearContents
    
    Range("E8").Value = 0
    UserForm1.Hide
    Selection.ClearContents
    Range("E9:E10").Select
    Selection.ClearContents
    Range("G8:G10").Select
    Selection.ClearContents
    
    Range("E12").Value = 0
    UserForm2.Hide
        Range("E13:E14").Select
    Selection.ClearContents
    Range("G12:G14").Select
    Selection.ClearContents
    
    Range("E16").Value = 0
    UserForm3.Hide
    
    Range("E17:E18").Select
    Selection.ClearContents
    Range("G16:G18").Select
    Selection.ClearContents
    ActiveWindow.SmallScroll Down:=12
    
    Range("E20").Value = 0
    UserForm4.Hide
    Range("E21:E22").Select
    Selection.ClearContents
    Range("G20:G22").Select
    Selection.ClearContents
    
    Range("E24").Value = 0
    UserForm5.Hide
    Range("E25:E26").Select
    Selection.ClearContents
    Range("G24:G26").Select
    Selection.ClearContents
    
    Range("E28").Value = 0
    UserForm6.Hide
    Range("E29:E30").Select
    Selection.ClearContents
    Range("G28:G30").Select
    Selection.ClearContents
    Range("E33:E34").Select
    Selection.ClearContents
    Range("G32:G34").Select
    Selection.ClearContents
    Range("I8:I34").Select
    Selection.ClearContents
    
    Range("E32").Value = 0
    UserForm7.Hide
    
   Range("B10").Select
   Selection.ClearContents
    Range("B14").Select
    Selection.ClearContents
   Range("B18").Select
   Selection.ClearContents
   Range("B22").Select
    Selection.ClearContents
    Range("B26").Select
    Selection.ClearContents
    Range("B30").Select
    Selection.ClearContents
    Range("B34").Select
    Selection.ClearContents
        
        Sheets("RIEPILOGO").Select
        Range("F27").Select
      
End Sub

