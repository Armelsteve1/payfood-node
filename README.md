# payfood-node


## Installation

1. Assurez-vous d'avoir Docker installé sur votre machine. Si ce n'est pas le cas, suivez les instructions d'installation sur le site officiel de Docker : [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

2. Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/Armelsteve1/payfood-node
```

3. Accédez au répertoire du projet :

cd payfood-node

## Configuration

Le fichier `docker-compose.yml` contient la configuration des services Docker utilisés dans le projet. Vous pouvez modifier les ports, les images Docker, les noms des conteneurs, etc., selon vos besoins.

## Utilisation

L'application est accessible à l'adresse suivante : `http://localhost:8080`. Assurez-vous que les services Docker sont en cours d'exécution en utilisant la commande `docker ps`.

## Fonctionnalités

- [x] Authentification jwt token & role 
- [x] Crud restauant & menu
- [ ] Points fidélités (en cours de développement)


## Auteurs

- [ArmelSteve1](https://github.com/Armelsteve1)

## Licence

Ce projet est sous licence [MIT](https://github.com/Armelsteve1/payfood-node/blob/main/LICENSE).
