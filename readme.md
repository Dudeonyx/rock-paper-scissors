# Paper, Scissors, Rock

## Introduction

  As the name implies, this is a project based on the popular game of the same name.
This project was created as part of the [Odin project](https://theodinproject.com) Web development 101 course.

## Description

The ultimate goal of this project was to create a game that would be played by a single player against the computer, a single game would consist of five rounds with an overall winner announced at the end of said five rounds.

Achieving this project involved creating functions to handle various aspects of the game, starting with a function to generate random computer picks, a function to handle player input, a function to compare player and computer picks and declare a winner for that round of play, and finally a function to would play five rounds, tally the wins and announce an overall winner.

## Personal Touch

This section lists some improvements I added on my own to make my project more robust

* Added a robust autocorrect function:

    I added a system to check for common player spelling mistakes or US/British spellings for example; scissor, scizzors, scisor, scisors, scizor, scissrs, ScIsSoR, sciZ etc. all auto correct to "scissors".

* Added a function to handle non-standard or invalid player inputs.

* Added a function to end the game at any round and still declare a winner(or a draw)