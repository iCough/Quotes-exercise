# exercise

Hi Benjamin,

ich bin endlich fertig... nach einer gefühlt endlosen Prügellei mit github und noch fehlenden SSHkey...
Bei der HEAD-Unterstützung war ich ein wenig unsicher, ob du head-requests direkt in Form von `app.head()...` mit drin haben wolltest oder ob es dir reicht, wenn die header-Daten in Postman angezeigt werden - das ist der Fall. Laut Stackoverflow wird die HEAD-Methode bei einem get-request automatisch implementiert.

Angesichts der verstrichenen Zeit möchte ich dir mein Ergebnis (trotz Ungewissheit bzgl. der head-requests) zuschicken. 

Josh

### Aufgabe
* GET für alle Autoren                        e.g. (http://localhost:5000/authors)
* GET für alle Zitate eines Autors            e.g. (http://localhost:5000/quotes/twain)
* GET für alle Zitate                         e.g. (http://localhost:5000/quotes)
* GET für ein spezifisches Zitat eines Autors e.g. (http://localhost:5000/quotes/4)
* DELETE für ein spezifisches Zitat           e.g. (http://localhost:5000/delete/1)
* alle Endpunkte müssen auch HEAD unterstützen

- Getestet mit **Postman**

### Kommentar
* Ich habe den Code modularisiert, um besseren Überblick zu ermöglichen.
* Es gibt 3 js-files in denen sich alles abspielt:
    * app.js
    * /routes/api.js
    * quoteDatabase.js
* Die Zitat-Datenbank _(quoteDatabase.js)_ ist ein Array von Objekten. Jedes Zitat hat 4 Properties:
    i. id
    ii. quote
    iii. author _(wird verwendet für die Darstellung aller Autoren => /authors)_
    iiii. nickname _(wird verwendet, bei abfrage eines einzelnen Autors => /quotes/gandhi)_
* Dadurch dass jedes Zitat-Objekt im Array eine eigene ID hat, gibt es beim Löschen eines einzelnen