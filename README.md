# exercise

### Aufgabe
- GET für alle Autoren                        e.g. (http://localhost:5000/authors)
- GET für alle Zitate eines Autors            e.g. (http://localhost:5000/quotes/twain)
- GET für alle Zitate                         e.g. (http://localhost:5000/quotes)
- GET für ein spezifisches Zitat eines Autors e.g. (http://localhost:5000/quotes/4)
- DELETE für ein spezifisches Zitat           e.g. (http://localhost:5000/delete/1)
- alle Endpunkte müssen auch HEAD unterstützen

- Getestet mit **Postman**

Hi Benjamin,

ich bin endlich fertig... nach einer gefühlt endlosen Prügellei mit github und noch fehlenden SSHkey...
Die HEAD-Unterstützung war ich ein wenig unsicher, ob du head-requests direkt in Form von `app.head()...` mit drin haben wolltest oder ob es dir reicht, wenn die header-Daten in Postman angezeigt werden - das ist auch der Fall. Laut Stackoverflow wird die HEAD-Methode bei einem get-request automatisch implementiert.

Angesichts der verstrichenen Zeit möchte ich dir mein Ergebnis (trotz Ungewissheit bzgl. der head-requests) zuschicken. 

Josh
