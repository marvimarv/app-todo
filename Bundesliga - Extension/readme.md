# Chrome Extension

## Voraussetzungen:
  - Bootstrap
  - CSS
  - anonyme Funktionen
  - API requests (fetch)
  - async await 
  - DOM Manipulatoren

## Lernziele:
 
  - Erkunden von Zeit in javaScript
  - Arbeit mit *API*, dynamisches verändern von Parameter
  - Schnelles Front-End durch Bootstrap
  - Funktionen
  - Event handler

Wir werden eine Chrome Extension, die im Browser (am besten Chrome) die aktuellen Ergebnisse des aktuellen Spieltags der ersten, zweiten und dritten Bundesliga anzeigt, schreiben. Da wir diese Extension als eine Datei von unserem lokalem System hochladen, brauchst du dir auch keine Sorgen über die Sicherheit machen. Eine `manifest.json` legt die zu erkennende Einstellungen für das spätere Hochladen der Dateien fest und kann so übernommen werden. In dem *pics* Ordner liegt ein Bild, welches später als Bild der Extension genutzt wird (festgelegt in der `manifest.json`)   
![Bild noch einfügen](./img/overview.png)

Dieser [Flowchart](https://miro.com/app/board/uXjVPz_rJUk=/?share_link_id=416269144797) kann als Hilfestellung (vor Allem um die Funktionsaufrufe nachzuvollziehen) genutzt werden.

## Aufgaben

*Für die erste Aufgabe gibt es unterschiedliche Lösungsansätze.So kann Bootstrap genutzt werden um sich Arbeit zu sparen und die beiliegende CSS. Natürlich können auch eigene Designs genutzt werden. Beachte dann jedoch bitte, dass die Größe der Liste entsprechend eigenständig justiert werden sollte. Dieses Projekt soll hauptsächlich das Abgreifen und verarbeiten von Daten einer API üben.*
1. Wir möchten nun das Grundgerüst unserer Extensionkarte erzeugen. Ähnlich wie im
im Bild besteht jene aus einer Überschrift (später erzeugen wir in unserer *javascript* die aktuelle Uhrzeit, nutze erstmal Platzhalter), einer Eingabe, sowie einer Menge von Listenelementen. Jedes Listenelement beinhaltet die gegeneinander spielenden Mannschaften und nach einem Zeilenumbruch den aktuellen Torstand. Die Listenelemente sind nur zum besserem Verständnis manuell erstellt worden, wir erstellen auch diese später in unserer *javascript* (also ist eigentlich nur ein übergeordnetes *ul* erstmal notwendig). Vergebe für die Überschrift, die Eingabe und  die *ul* jeweils *Klassen* oder *Id*. Weitere Attribute (wie `placeholder="Hier steht was"`) für den *input* können gegebenenfalls ergänzt werden.<br>
![HTML/CSS](./img/grundgeruest.png)


2. Folgend soll die Überschrift nun in die aktuelle Uhrzeit geändert werden. Erkundige dich wie man ein sogenanntes *date object* erzeugen kann. Ändere nun das Element mit der Überschrift in das aktuelle Datum. *Tipp: `element.innertext = dateObject`*
      
3. Als Nächstes wollen wir einen *request* für unsere Daten stellen. Um eine *API* zu nutzen, sollte man sich die oft beiliegende Dokumentation durchlesen. Meistens beschreibt diese die Nutzung der *API* und ihrer Routen, sowie die abgreifbaren Daten (wenn sie gut dokumentiert ist!). Schaue dir hierfür die Seite [OpenBundesligaDB](https://www.openligadb.de/) an. Erkennst du den *URI-Endpoint*? Um welche Routen müsste dieser ergänzt werden, damit die erste, zweite, dritte Bundesligadaten abgerufen werden können?<br>
*Tipp: Mit [SwaggerUI](https://swagger.io/tools/swagger-ui/download/) kann man **API-Endpoints und ihre Ressourcen** im Browser (alternativ zu Postman) veranschaulichen.*  

4. Nachdem du die *URI und Parameter* verstanden hast und auch schon im Browser vielleicht dir verschiedenen Ressourcen darstellen lassen hast, soll nun ein eine Funktion geschrieben werden die einen *get request* an die *API* stellt. Da wir die jeweilige Liga durch unsere Eingabe später ändern, können wir eine *globale Variable* erstellen in der zuerst initial die erste Bundesliga gespeichert ist (Kürzel bl1,bl2 usw.). Schreibe nun eine anonyme, asynchrone Funktion, die mit Hilfe von *fetch* nun die Daten der richtigen *URL* abgreift. Lasse dir die Daten dann in der Konsole entsprechend ausgeben. *Tipp: `let someVariable = "bl1"` | `fetch("https://api.openligadb.de/getmatchdata/" + leagueVariable)`*

5. Nun soll eine Funktion, die diese Daten entgegennimmt, geschrieben werden. Dabei handelt es sich um ein *array von dictionaries*. Überlege dir wie du über dieses *array* iterieren kannst um
   - auf das erste Team zuzugreifen und in einer Variablen zu speichern
   - auf das zweite Team zuzugreifen und in einer Variablen zu speichern
   - den Torstand des ersten Teams in einer Variablen zu speichern
   - den Torstand des zweiten Teams in einer Variablen zu speichern<br>
*Tipp: Die Torstände werden als einzelne items in einem Array gespeichert. Um auf das letzte Element des sich ständig aktualisierenden arrays zuzugreifen kannst du die `array.at(elementPosition)` Methode nutzen. [Mehr dazu](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)*

6. Schreibe nun eine Funktion, die die Teams und die Punkte als *Parameter* entgegennimmt. Überlege dir wie du aus den *Parametern (Teams,Punkte)* ein Listenelement erstellen kannst und es deiner übergeordneten *ul* in der *HTML-DOM* anhängen kannst.<br>
*Tipp: `document.createElement(element)` | `parentElement.appendChild(element)`*

7. Zuletzt soll eine *keypress-Funktion* für den *Event-Handler* (`element.addeventlistener("keypress",function)`) geschrieben werden. In dieser Funktion soll der Wert des *HTML-Input* zuerst abgegriffen werden, dieser soll dann überprüft werden, ob er einen der zugelassenen Werten (entweder **bl1**,**bl2** oder **bl3**) entspricht. Trifft die Eingabe zu, wollen wir unsere oben erstellten Funktionen mit dem Wert (bei Eingabe von bl2, sollen alle Teams mit Punktestand der zweiten Bundesliga dargestellt werden) aufrufen lassen. Überlege dir außerdem eine passende Ausgabe/Anzeige, wenn ein anderes Suchwort als die zugelassenenen Begriffe eingegeben wird.<br>
Welche Funktion nutzen wir? Muss sonst noch etwas beachtet werden, damit die Daten der jeweils eingegeben Bundesliga abgegriffen und richtig dargestellt werden?<br>
*Tipp: Beachte den Ablauf im Flowchart!*

8. Der Code ist soweit fertig, damit wir diese Extension aber auch im Browser sichtbar machen können, müssen wir noch unseren Ordner in den Browser laden. Gehe dafür in **Chrome -> Browsereinstellungen -> Erweiterungen -> Entpackte Erweiterung laden -> Wähle übergeordneten Ordner des Projekts aus**. Die Erweiterung sollte nun auch als shortcut sichtbar sein (eventuell den Browser neu starten).

Die Erweiterung könnte jetzt veröffentlicht werden, dazu müsste jedoch ein kostenpflichtiger Developer Account erstellt werden. Weitere Infos dazu findest du [hier](https://support.google.com/chrome/a/answer/2714278?hl=de). Es gibt auch in diesem Projekt die Möglichkeit der Verbesserung. Ein bekanntes Problem ist, dass kurz vor dem neuen Saisonbeginn die Daten der letzten Saison veraltet sind und dadurch keine Ergebnisse, auch die des letzten Spieltags der letzten Saison, angezeigt werden. Mögliche Verbesserungen oder weitere Ideen sind dir überlassen! :-) 
