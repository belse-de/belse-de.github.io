XBox 360 Chatpad
================
Baujahr ???

---

Grund Prinzip
-------------

Verbindung
----------

### Serielle Schnitstelle ###
* 3,3 Volt UART
* 8 Databits, 1 Stoppbits
* Keine Paritätsbits
* 19200 boud
* Kein Flowcontroll
* Empfangspuffergröße ~16 Byte (max. Packet größe ~8Byte)

### Pinout

| Pin | TestPoint | Signal         |
| :-- | :-------- | :------------- |
| 1   | 5         | +3.3V          |
| 2   |           | RX / In        |
| 3   | 9         | TX / Out       |
| 4   | 8         | Ground         |
| 5   | 6         | Tip (Audio)    |
| 6   | 7         | Ring (Audio)   |
| 7   |           | Shield (Audio) |



### Protokoll ###
#### Aufbau ####

| Type         | Header | Message | Checksum |
| :----------- | :----: | :-----: | :------: |
| Länge [Byte] | 2      | 1 - 5   | 1        |

#### Berechnung Checksumme
```c
  // calc checksum for compairision
  #includ <stdint.h>
  typedef uint8_t byte;
  byte sum = 0;
  for( int i = 0; i < len - 1; i++){
    sum += buffer[i];
  }
  byte checkSum = (~sum + 1); // = sum * (-1)
```

### Packete ###

#### Header ####
Der Header besteht aus 2 Byte:
1. Byte: ID [0..16] und upper nipple = ~(lower nipple) -> [ 0F, 1E, 2D, 3C, 4B, 5A, 69, 78, 87, 96, A5, B4, C3, D2, E1, F0 ]
2. Byte: lower nipple = length in bytes

#### Bekannte Packete ####

| Struktur                | Header | Daten                       | Checksum | Länge Daten [Byte] | Länge Packet [Byte] | Richtung | Bedeutung              |
| :---------------------- | :----- | :-------------------------- | :------: | :----------------: | :-----------------: | :------- | :--------------------- |
| B4 C5 00 mk k0 k1 ?? CS | B4 C5  | mk - 0F - modifier key      | CS       | 4                  | 8                   | cp -> pc | keys                   |
|                         |        |    01 - shift               |          |                    |                     |          |                        |
|                         |        |    02 - square              |          |                    |                     |          |                        |
|                         |        |    04 - circle              |          |                    |                     |          |                        |
|                         |        |    08 - people              |          |                    |                     |          |                        |
|                         |        |  k0 - FF - key one          |          |                    |                     |          |                        |
|                         |        |  k1 - FF - key two          |          |                    |                     |          |                        |
|                         |        |                             |          |                    |                     |          |                        |
| A5 45 F0 d1 d2 d3 d4 CS | A5 45  | d1 - 03 - standby           | CS       | 4                  | 8                   | cp -> pc | Status                 |
|                         |        |  d1 - 04 - active           |          |                    |                     |          | every ~78 milliseconds |
|                         |        |  d2 - 00 - light off        |          |                    |                     |          |                        |
|                         |        |  d2 - 80 - light on         |          |                    |                     |          |                        |
|                         |        |  d3 - 0x - init count       |          |                    |                     |          |                        |
|                         |        |  d4 - 0x - init count       |          |                    |                     |          |                        |
|                         |        |                             |          |                    |                     |          |                        |
| 87 02 8C d0 CS          | 87 02  | d0 - 1F / CS - CC - Init    | CS       | 1                  | 5                   | cp <- pc | Init                   |
|                         |        |  d0 - 1B / CS - D0 - wakeup |          |                    |                     |          |                        |
|                         |        |                             |          |                    |                     |          |                        |

* cp := Chatpad
* pc := Rechner


Weitere Informationen
---------------------

[GitHub mit Sources und Package-Dumps](https://github.com/belse-de/XBox360-Chatpad.git)

Quellen
-------

[Use an Xbox360 mini-keyboard with your Arduino, 2011](http://cliffle.com/project/chatpad/protocol/ "")

---
Letzte Bearbeitung: 

- 29.05.17 - Links korrigiert
- 23.05.17 - Aufräumen und Publikation
- 27.03.17 - Brutforcing communication

