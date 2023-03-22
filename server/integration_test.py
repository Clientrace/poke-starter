
import requests

HOST_URL = 'http://localhost:4000/dev'


def register_user():
  resp = requests.post(HOST_URL+'/user/register', json={
    'username': 'clarence123'
  })
  print(resp)

def get_user():
  resp = requests.get(HOST_URL+'/user/info/clarence')
  print(resp.json())


def update_pokemon():
  resp = requests.post(HOST_URL+'/user/info/clarence', json={
    'pokemonId': '3',
    'pokemonNickname': 'pikapika'
  })

  print(resp.json())

def get_starter_pokemons():
  resp = requests.get(HOST_URL+'/pokemon/starters')
  print(resp.json())


def get_pokemon():
  resp = requests.get(HOST_URL+'/pokemon/info/charmander')
  print(resp.json())


if __name__ == '__main__':
  register_user()
  get_user()
  update_pokemon()
  get_starter_pokemons()
  get_pokemon()



