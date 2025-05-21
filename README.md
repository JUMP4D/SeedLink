# SeedLink

Un serveur tracker BitTorrent en Node.js utilisant la bibliothèque [`bittorrent-tracker`](https://www.npmjs.com/package/bittorrent-tracker).

---

## Description

Ce projet met en place un tracker BitTorrent capable de gérer les connexions via HTTP, UDP et WebSocket. Un tracker est un serveur qui aide les clients BitTorrent à découvrir d’autres pairs pour partager des fichiers.

Ce serveur inclut également un module de statistiques, ainsi que des gestionnaires d’erreurs et d’avertissements pour faciliter le debug.

---

## Fonctionnalités

- Support complet des protocoles HTTP, UDP et WebSocket.
- Affichage des adresses d’écoute pour chaque protocole.
- Statistiques intégrées.
- Gestion des erreurs et avertissements via des événements.
- Configuration facile via code source.

---

## Prérequis

- Node.js (version 14+ recommandée)
- npm (gestionnaire de paquets Node.js)

---
