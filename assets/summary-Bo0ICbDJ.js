var e=`# 2026 · Kapitel 9: Zertifikate, OIDC

## Überblick

Dieses Kapitel erklärt OpenID Connect und die Integration eines Identity Providers in eine ASP.NET-Core-Anwendung.

## Inhalte

- OpenID Connect als Authentifizierungsschicht auf OAuth 2.0
- Rollen von Client, Webhost und Authorization Server
- Authorization Code Flow und Tokens
- ID Token, Access Token und Validierung
- Corporate Identity Provider wie Microsoft Entra ID
- Integration von OIDC in ASP.NET Core
- Login, Logout und Session Cookies

- Praktisches Hands-on mit authentik

## Ablauf

Beim Authorization Code Flow wird der Benutzer zum Identity Provider weitergeleitet. Nach erfolgreicher Anmeldung erhält die Anwendung einen Code und tauscht ihn serverseitig gegen Tokens. Das ID Token beschreibt die Identität, während ein Access Token den Zugriff auf eine Ressource erlaubt. Die Anwendung muss Tokens validieren und darf Identitätsdaten nicht blind aus dem Browser übernehmen.

## Lernziele

Die Studierenden können den OIDC-Ablauf erklären und eine Webanwendung mit einem Identity Provider verbinden.
`;export{e as default};