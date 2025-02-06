- ember new mon-projet
- ember g route todo-lists (juste garder le title et l'outlet)
- ember g route todo-lists/index

  - dans mon index route, j'ai recuperer la liste de todos du localStorage

- ember g route todo-lists/new

  - dans la route new, j'ai cree un model vide

- ember g controller todo-lists/new
  - dans mon controller, j'ai defini l'action de sauver, et l'action
    de mettre à jour le model à chaque pression sur le clavier dans l'input
    nom
- ember g service todo-manager
  - j'ai déplacé la logique de gestion du localStorage pour pouvoir
    l'utiliser à divers endroits
