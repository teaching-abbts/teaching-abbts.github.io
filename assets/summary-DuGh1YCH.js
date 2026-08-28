var e=`# 2026 · Kapitel 3: Client-Server und HTTP

## Worum geht es?

Eine Webanwendung besteht nicht nur aus einer Webseite. Der Browser ist ein **Client**, der Ressourcen und Daten bei einem **Server** anfordert. Dieses Kapitel erklärt den gemeinsamen Ablauf dieser Kommunikation: Der Client sendet einen HTTP-Request, der Server verarbeitet ihn und antwortet mit einem HTTP-Response.

## Die wichtigsten Punkte

### Ressourcen und URLs

Eine URI identifiziert eine Ressource. Eine URL ist eine konkrete Adresse, über die diese Ressource gefunden werden kann. Sie besteht typischerweise aus Protokoll, Host, Port, Pfad und optionalen Query-Parametern. Der Browser verwendet diese Adresse, um beispielsweise eine HTML-Seite, ein Bild oder einen API-Endpunkt anzufordern.

### HTTP-Request und HTTP-Response

Ein Request enthält eine Methode wie \`GET\`, \`POST\`, \`PUT\` oder \`DELETE\`, die Ziel-URL, Header und optional einen Body. Die Methode beschreibt die Absicht der Anfrage. Ein Response enthält einen Statuscode, Header und optional Daten. \`2xx\` steht für Erfolg, \`3xx\` für Weiterleitungen, \`4xx\` für Fehler des Clients und \`5xx\` für Fehler des Servers.

### Datenübertragung mit Formularen

Formulare übertragen Eingaben in einem definierten Format. \`application/x-www-form-urlencoded\` eignet sich für einfache Textfelder. \`multipart/form-data\` wird verwendet, wenn Dateien oder mehrere unterschiedliche Datenteile übertragen werden. Der Server muss den Content-Type auswerten und die Daten entsprechend verarbeiten.

### Zustände über mehrere Requests

HTTP ist grundsätzlich zustandslos: Jeder Request ist zunächst unabhängig. Cookies können jedoch eine Session-ID speichern, mit der der Server einen Benutzer wiedererkennt. Caching reduziert wiederholte Übertragungen und verbessert die Antwortzeit, muss aber mit Ablaufzeiten und Aktualisierungen sorgfältig geplant werden.

### ASP.NET-Core-Bezug

ASP.NET Core stellt Endpunkte bereit, die HTTP-Anfragen entgegennehmen und Antworten erzeugen. Middleware kann Requests analysieren, HTTPS erzwingen, Dateien ausliefern oder Authentifizierung vorbereiten. Dadurch wird sichtbar, wie die theoretische Request-Response-Kommunikation in einer konkreten Serveranwendung umgesetzt wird.

## Zusammenhang

Frontend und Backend kommunizieren über einen Vertrag: URL, HTTP-Methode, Datenformat und erwartete Statuscodes müssen zusammenpassen. Viele Fehler entstehen nicht im UI oder im Server allein, sondern an dieser Schnittstelle. Deshalb ist es wichtig, Requests und Responses mit den Browser-Entwicklertools oder einem HTTP-Client zu untersuchen.

## Lernziele

Die Studierenden können eine HTTP-Kommunikation von der URL bis zur Response analysieren, passende Methoden und Statuscodes auswählen und Formulardaten inklusive Dateien an einen Server übertragen.
`;export{e as default};