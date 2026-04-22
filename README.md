# TascaFinal-LM
## Enunciat ##
Desenvolupar una aplicació web modular que permeti planificar, gestionar i fer seguiment
de tasques personals mitjançant formularis, visualització gràfica i persistència de dades.
Aquesta aplicació simula un gestor personal d’activitats, posant en pràctica tots els
coneixements apresos durant el curs.

## Requisits i funcionalitats mínims: ##
L’aplicació ha d’estar composta per 3 pàgines HTML amb les funcionalitats següents:

### index.html – Vista principal ###
● Ha de tenir un menú de navegació.
● Mostra un llistat de totes les activitats.
● Permet:
  ○ crear, eliminar, marcar com a realitzades.
● Mostra un gràfic amb Chart.js amb les tasques realitzades per mes.
● Carrega les activitats des de:
  ○ localStorage
  ○ un fitxer activitats.json (importació amb fetch(), evitant duplicats).


### crear-tasca.html – Formulari per afegir activitats ###
● Ha de tenir un menú de navegació.
● Inclou un formulari amb validació:
○ títol, descripció, data, categoria (selector de categories), prioritat (selector de Baixa,
Mitjana, Alta)

● Guarda les activitats a localStorage amb un id únic amb el format “task-001” i el camp
realitzada: false.

### categories.html – Gestor de categories ###
● Ha de tenir un menú de navegació.
● Permet afegir i eliminar categories que es poden usar al formulari.
● Les categories es guarden a localStorage.
