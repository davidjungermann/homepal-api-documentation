**Komponenter**

**Generellt**

- Fixa auth exempel. Fult!

Bugs:

- I App har vi currentSection. Skicka ner currentSection till Navigation och NavigationItem. I handleOpen() lyssna efter klick.
  Klick sätter classname, som ändrar stylingen.

Skicka ner setCurrentSection till Section via Routes. I if-satsen med viewport, setCurrentSection(props.id)
