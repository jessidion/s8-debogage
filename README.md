# S8 - Débogage

## Objectifs

- Pratiquer l'utilisation du débogueur dans le navigateur
- Pratiquer l'utilisation du système de billets dans les outils de gestion de versions
- Développer des stratégies de débogage
- Se pratiquer à lire le code de quelqu'un d'autre

## Instructions

1. Faire un copie personnelle du code fourni *(fork)* (au minimum 1 copie par équipe) - il est suggéré de faire le travail en équipe. 

2. Lire le code et le documenter. Quand vous voyez une méthode jQuery que vous ne connaissez pas, aller voir dans la documentation officielle. Vous pouvez compléter la documentation après avoir testé l'application et/ou après l'avoir corrigée.

3. Relire les exigences de l'application - objectif de la mini-application fournie

4. Inspecter l'application dans le navigateur :
   - Inspecter l'objet jeu avec «Watch»
   - Ajouter des points d'arrêts aux endroits appropriés
   - Inspecter aussi le CSS au besoin

5. Pour chaque problème trouvé :

   1. Créer un billet GitLab, comprenant une capture d'écran, à l'aide de ce Gabarit

      ```markdown
      # Description générale
      Décrire le bogue en quelque phrases
      
      # Étapes pour reproduire le bogue
      1.
      2.
      ## Comportement observé
      
      ## Comportement attendu
      
      # Débogage
      
      ```

   2. Inspecter l'application dans le navigateur et prendre au moins une capture d'écran du débogage. Insérer cette capture dans le billet (on peut simplement copie-coller l'image).

   3. Corriger le bogue avec un nouvel archivage (*commit*) avec le moins de code possible. Ajouter le numéro du billet dans le message d'archivage (ex. ` Correction apparence des nombres exclus (fixes #1)`)

   *Note : il ne s'agit pas de copier-coller une solution fonctionnelle pour corriger en 1 opération le code fourni. Il s'agit de comprendre comment déboguer une application web ;)*



### Exigences de l'application

Il s'agit de développer un mini-jeu où l'on devine un nombre choisi de façon aléatoire.

- L'utilisateur a dix essais pour trouver le nombre après quoi on lui indique qu'il n'a pas réussi.
- Après chaque essai, l'application indique si le nombre soumis par l'utilisateur est trop haut, trop bas, ou s'il s'agit de la bonne réponse.
- L'application affiche toujours la liste des essais effectués.
- Après chaque essai, l'application aide l'utilisateur en retirant les nombres possibles selon les indices données par l'application (voir la vidéo démo)
- Tous les nombres sont affichés sous forme de carrés. On affiche 10 nombres par ligne.
- On peut démarrer une nouvelle partie à l'aide d'un bouton

Une démo de l'exécution de l'application terminée : https://www.youtube.com/watch?v=S6jlNYFFzSw

### Finalisation et remise de l'exercice

- Prendre en note le nombre de lignes modifiées pour corriger l'application
- Écrire au tableau le nom de l'équipe et le nombre de modifications apportées pour corriger l'application fournie (nombre de lignes modifiées) 
