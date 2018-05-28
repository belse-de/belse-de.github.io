# Magellen Space Mouse Classic #
 Baujahr 1993
 
---

Vor Ewigkeite habe ich eine Magellan SpaceMouse erhalten, die auf Grund 
versalteter Technik und vorallem nicht mehr vorhandener Treiber unterstüzung für
 Windows 7  aussortiert wurde. Die Nachfolge Firma 3Dconnexion stellte Ende 2006
 offiziel den Support ein. 

## Grund Prinzip ##
Bei diesem Spielzeug handlet es sich um ein Eingabegerät welches zur Steuerung von 3D-CAD Anwendungen benutzt wurde. Zu diesem Zweck besitzt diese Harware 10 gummie Tasten und einem Hocky-Puck nicht unähnlichen Knauf. Diese Knauf besitzt 6 Freiheitsgrade (zu Eng. Degres-of-Freedom, DOF). Das heißt in alle Richtungen des 3D-Systems (x-Achse, y-Achse und z-Achse) kann der Knauf geschoben oder gekippt werden.

Die Position und Rotation des Pucks wird mit hilfe optischer Sensoren erfasst
und ist daher verschleiß frei. Jedoch ist die mechanische Zentrierung durch eine
Art Federsystem realisiert und unterliegt damit ermüdungen.

Die 3D-Maus wird über eine serielle Schnittstelle (COM-Port/RS232) angeschlossen. 

## Verbindung ##
### Serielle Schnitstelle ###
- RS232C Serial
- 9-Pol D-Sub Stecker
- 8 Databits, 2 Stoppbits
- Keine Paritätsbis
- 9600 boud
- RTS/CTS Flowcontroll - als Stromversorgung
- Empfangspuffergröße ~64 Byte (max. Packet größe ~55Byte)

### Protokoll ###
#### Aufbau ####
Im standart Modus werden alle Daten in normalen, druckbaren ASCII-Zeichen übertragen. 
Dabei wird ein Datenpacket mit 'Carriage Return' (\r, 0x0d) beendet.

Jedes Packet beginnt mit einem Buchstaben zum Beispiel 'k' für die Zustände der Tasten oder 'd' für die Position des Pucks. Dabei ist jedem Buchstaben gleichzeitig eine feste Länge des Packetes zugeordnet. Die Daten-Bytes(8-Bit) enthalten jeweil ein Daten-Nibble(4-Bit) und im 'oberen' Nibble die Parität des Daten-Nibbles.

Die meisten Daten könne aktiv abgeholt(polled) werden. Hier für sendet man 
die gewüschte ID gefolgt von 'Q' und '\r'. 
Um zum Beispiel die aktuellen Tastenzustand ab zu fragen sendet man 'kQ\r'.

### Packete ###

| ID  | Struktur                  | Beschreibung       | Daten         | Länge |
| :-: | :------------------------ | :----------------- | :------------ | :---: |
|  b  | b1                        | Beep               |               |   2   |
|  c  | c12                       | Kompression        |               |   3   |
|  d  | d111122223333444455556666 | Position des Pucks | 1. Translation x-Achse<br/>2. Translation y-Achse<br/>3. Translation z-Achse<br/>4. Rotation x-Achse<br/>5. Rotation y-Achse<br/>6. Rotation z-Achse | 25 |
|  e  | e12                       | Error              |               |   3   |
|  k  | k123                      | Zustand der Tasten | 1. *-Taste<br/>2. Tasten 5,6,7,8<br/>3. Tasten 1,2,3,4 |   4   |
|  m  | m1                        | Modus              |               |   2   |
|  n  | n1                        | Null-Radius        |               |   2   |
|  p  | p12                       | Datenrate          |               |   3   |
|  q  | q12                       | Sensitivität       |               |   3   |
|  t  | t12                       | Trapp/watchdog?    | nicht dokumentiert<br/><pre>5A</pre> |   3   |
|  u  | u#[28]                    | Firmware Hash?     | nicht dokumentiert<br/><pre>9MH3:AHA9NGN9KH096GM9<G<9GG<</pre> |  29   |
|  v  | v#[54]                     | Version            | <pre>   MAGELLAN  Version 5.79  by LOGITECH INC. 10/10/97 </pre> |  54?  |
|  z  | z                         | Setzten der Nullposition |         |   1   |

### Kodierung ###

	+-------------------+---+---+---+---+
	| ASCII Table       | Magellan Code |
	+-----+------+------+---+---+---+---+
	| Hex | 0x30 | 0x40 |Val|Par| upper |
	+-----+------+------+---+---+---+---+
	| 0x0 |   0      @  | 0   E   3     |
	| 0x1 |   1      A  | A   O       4 |
	| 0x2 |   2      B  | B   O       4 |
	| 0x3 |   3      C  | 3   E   3     |
	| 0x4 |   4      D  | D   O       4 |
	| 0x5 |   5      E  | 5   E   3     |
	| 0x6 |   6      F  | 6   E   3     |
	| 0x7 |   7      G  | G   O       4 |
	| 0x8 |   8      H  | H   O       4 |
	| 0x9 |   9      I  | 9   E   3     |
	| 0xA |   :      J  | :   E   3     |
	| 0xB |   ;      K  | K   O       4 |
	| 0xC |   <      L  | <   E   3     |
	| 0xD |   =      M  | M   O       4 |
	| 0xE |   >      N  | N   O       4 |
	| 0xF |   ?      O  | ?   E   3     |
	+-----+------+------+---+---+---+---+

## Weitere Informationen

Nach dem ich einige Zeit damit verbracht hatte, dass Protokoll zu analysieren, und ich lange Zeit nicht weiter kam, sante mir der Betreiber des [Spacemise Wikies](http://spacemice.org) das Programmers Manual für meine SpaceMouse zu.

Dies enthält eine viel genauere spezifizierte Protokollbeschreibung, und auch Befehle die für andere Versionen dieser Baureihe gelten. Als Beispiel sei hier die Beleuchtung von Tasten erwähnt, die mit meiner Maus nicht möglich sind.

Für weiter und genauere Daten siehe:
[Programmers's Guide v.3.1 Magellan/ SpaceMouse [Calssic|plus|Plus XT], 2000](content/res/magellan/Magellan_Programmers_Manual_2000.pdf)

---

## Quellen:

### PDFs
[SpaceMouse Classic Infoblatt 2000](content/res/magellan/SpaceMouseClassic.pdf)

[SpaceMouse Plus Infoblatt 2000](content/res/magellan/SpaceMousePlus.pdf)

[SpaceMouse Plus Infoblatt 2003](content/res/magellan/SpaceMousePlus_B.pdf)

<br/>

[Magellan Protocol and API Specification, John Tsiombikas, 2007](content/res/magellan/Magellan_Protocol.pdf)

[User's Guide v.2.1 - WINDOWS - Magellan/ SpaceMouse [Calssic|plus|Plus XT], 2000](content/res/magellan/Magellan_Manual_W.pdf)

[User's Guide v.2.2 - WINDOWS - Magellan/ SpaceMouse [Calssic|plus|Plus XT], 2001](content/res/magellan/Magellan_Manual_W_2000.pdf)

[User's Guide v.2.2 - UNIX - Magellan/ SpaceMouse [Calssic|plus|Plus XT], 2000](content/res/magellan/Magellan_Manual_X.pdf)

[User's Guide v.2.3 - UNIX - Magellan/ SpaceMouse [Calssic|plus|Plus XT], 2001](content/res/magellan/Magellan_Manual_X_2000.pdf)

<br/>

[Programmers's Guide v.3.1 Magellan/ SpaceMouse [Calssic|plus|Plus XT], 2000](content/res/magellan/Magellan_Programmers_Manual_2000.pdf)

### Ander Webseiten

[paulbourke.net: Decoding data from the Magellen Space Mouse](http://paulbourke.net/dataformats/spacemouse/ "Decoding data from the Magellen Space Mouse, Paul Bourke, Dec 2006")

[Spacemice Wiki: DLR / Magellan / Spacemouse](http://spacemice.org/index.php?title=Spacemouse_Classic "DLR / Magellan / Spacemouse")

---
Letzte Bearbeitung: 

- 21.05.17 - Aufräumen und Publikation
- 12.03.15 - Magellan Programmers Manual
- 17.07.14 - Brutforcing Packet IDs und Parity beobachtung
- 15.07.14 - Paul Bourke Infos verifizieren
- 14.07.14 - Verbindung

