## Rest-API mit node.js

Der delete-request funktioniert (noch) nur einmalig, weil in dieser Implementation ein Mittel fehlt, um mit der Index-Mutation umzugehen, wenn ein Element aus der Array entfernt wird. Die Lösung dafür wäre, dass nach der Entfernung eines Elements aus dem Array, ein neues Array erstellt wird (z.B. mit `slice()`), welches die übrig gebliebenen Items des Ursprungsarrays enthält. Aus diesem wird dann das nächste Item rausge-`splice()`t ..., um mal eine Möglichkeit dafür zu nennen. 



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
    1. id
    2. quote
    3. author _(wird verwendet für die Darstellung aller Autoren => /authors)_
    4. nickname _(wird verwendet, bei abfrage eines einzelnen Autors => /quotes/gandhi)_
* Der **get**-request für einen Autor bzw. ein Zitat liefert entsprechendes Ergebnis, je nachdem ob in der URL ein String oder Int erkannt wird.
* Der **delete**-request entfernt das gewünschte Zitat. 
   * mehrmalige Ausführung kann zur Zeit noch nicht verarbeitet werden, wegen noch nicht implementiertem Umgang mit Index-mutation nach dem ersten delete. 
   * **Lösung:** Nach erstem Delete-request neues Array erstellen (z.B. `slice()` und mit übriggebliebenen Elementen auffüllen. Nächster delete-request an neuem Array (z.B. mit `splice()`) ausführen und neues Array mit wiederum übrigbleibenden Elementen überschreiben.
