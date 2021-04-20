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
- Lägg till kapitel om cascading changes och foreign keys!
- Egentligen behöver vi nog inte förklara superclasses så mkt! Det du har skrivit nu handlar mer om enumerated values egentligen, och det kanske vi borde förklara.
- Kanske borde lägga till en disclaimer på auth? Att det faktiskt inte fungerar, men att man borde generera en nyckel ändå! 
- Lägg till en lite goare text på Validations. "Due to the nature of this test, no validations are made in this mock version of the API"
- "No idea" på traceId. 



Bugs:

- I App har vi currentSection. Skicka ner currentSection till Navigation och NavigationItem. I handleOpen() lyssna efter klick.
  Klick sätter classname, som ändrar stylingen.

Skicka ner setCurrentSection till Section via Routes. I if-satsen med viewport, setCurrentSection(props.id)
