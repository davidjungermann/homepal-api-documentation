**Komponenter**

**Generellt**

- Fixa auth exempel. Fult!
- Lägg in alla som subsections!
- Mer spacing i sidebar.
- Antingen fixa dropdown eller scroll som följer med!
- Kommatecken i object description.
- Linebreak i exempel.
- Konstigt med return på GetCustomers! 
- Kanske skriva ut enums på conc over för att göra det tydligare
- Lägg till kapitel om cascading changes! 

Bugs:

- I App har vi currentSection. Skicka ner currentSection till Navigation och NavigationItem. I handleOpen() lyssna efter klick.
  Klick sätter classname, som ändrar stylingen.

Skicka ner setCurrentSection till Section via Routes. I if-satsen med viewport, setCurrentSection(props.id)

