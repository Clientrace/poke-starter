
import json
import requests


def register_user():
  url = 'http://localhost:4000/dev/user/register'
  resp = requests.post(url, json={
    'username': 'clarence123'
  })
  print(resp)

def get_user():
  url = 'http://localhost:4000/dev/user/info/clarence143'
  resp = requests.get(url)
  print(resp.json())


def update_pokemon():
  url = 'http://localhost:4000/dev/user/info/clarence143'
  resp = requests.post(url, json={
    'pokemonId': '3',
    'pokemonNickname': 'pikapika'
  })

  print(resp.json())

def get_starter_pokemons():
  url = 'http://localhost:4000/dev/pokemon/starters'
  resp = requests.get(url)
  print(resp.json())


def get_pokemon():
  url = 'http://localhost:4000/dev/pokemon/info/charmander'
  resp = requests.get(url)
  print(resp.json())


get_pokemon()


