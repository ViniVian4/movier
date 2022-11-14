# Seção inicial

Este projeto é um back-end para uma wishlist de filmes

# Como rodar

GET: /movies \
retorna todos os filmes
\
\
GET: /movies/:platform \
retorna a quantidade de filmes por plataforma
\
\
POST: /movies \
body: {name: "die hard", genre: "ação", platform: "netflix"}
\
\
PUT /movies/:id \
marca o filme com o id escolhido como assistido
\
\
DELETE: /movies/:id \
deleta um filme do banco