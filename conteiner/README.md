### Conta Docker Hub

Acessar o [docker-hub](https://hub.docker.com) criar conta
Acessar o [labs play with docker](https://labs.play-with-docker.com) e logar com a conta do docker hub

- Criar nova instância

### Comandos Iniciais

- docker "comando" "subcomando" "parâmetros" é o formato padrão para comandos não-abreviados no CLI
- Utilize o parâmetro --help no "comando" ou "subcomando" para ter a relação completa do que pode ser executado a partir deles
  Ex: Exemplo: docker container --help ou docker container run --help
  Obs: Os "parâmetros" são opcionais na execução dos comandos
- docker --version -> Versão do Docker na máquina
- doc + tabs -> Lista possíveis comandos com essas iniciais
- docker container run 'nome da imagem' -> roda a imagem selecionada
- docker container ls --all -> listo todos os containers que rodei
- docker conteiner start 'nome'
- máscara IP docker -> #172.17.0.2 até #172.17.0.254
- docker container inspect 'nome do conteiner' -> inspeção
- curl + o IP -> Saída do html
- docker container exec --tty --interactive 'nome da imagem' bash -> Abrirá terminal bash com minha imagem sendo executada
- docker pull 'nome da imagem' -> pull
- docker image ls -> listar imagens
- docker image rm 'nome da imagem' -> remoção de imagem
- docker run conteiner -d 'nome da imagem' -> envia para background
- docker container prune -> permite remover todos os containers inativos de uma só vez.
- O docker dispõe por padrão de três redes: bridge, host e none
- A rede bridge é usada para comunicar containers em um mesmo host
- Redes bridges criadas manualmente permitem comunicação via hostname
- A rede host remove o isolamento de rede entre o container e o host
- A rede none remove a interface de rede do container
- Podemos criar redes com o comando docker network create

### Volumes

- EXEMPLO=abc -> crio uma variável que é o "EXEMPLO" e atribuo valor "abc" a ela
- echo $EXEMPLO -> acesso o valor da variável exemplo
- docker container run --detach --name mariadb --env MYSQL_ROOT_PASSWORD='' -e MYSQL_USER='' -e MYSQL_PASSWORD='' -e MYSQL_DATABASE='' mariadb -> crio container mariadb com variáveis do banco mysql
- #docker container logs -f mariadb -> acompanho o movimento do container mariadb
- apk add py3-pip -> instalo gerenciador de python para rodar uma aplicação nessa linguagem
- flask run -h 0.0.0.0 -> peço que o framework flask rode qualquer host

### Dockerfile

- FROM -> Qual imagem irei me basear
- EXPOSE -> Qual porta irei usar
- RUN -> execução da imagem
- COPY -> o código copiado (usando o caminho onde este cód está)
- WORKDIR -> setar um arquivo padrão
- CMD -> comando padrão
- three -> mostra a árvore de comandos do dockerfile
- docker image build --tag 'nome da imagem' . -> construo uma imagem flask usando o diretório que estou
- docker login -> ..
- docker build -f Dockerfile -> cria uma imagem a partir de um Dockerfile.
- docker build -f CAMINHO_DOCKERFILE/Dockerfile -t NOME_USUARIO/NOME_IMAGEM -> constrói e nomeia uma imagem não-oficial informando o caminho para o Dockerfile.
- Toda imagem que baixamos é composta de uma ou mais camadas.Essas camadas podem ser reaproveitadas em outras imagens, acelerando assim o tempo de download.

### Docker Compose YAML

Acesse o [Docker Compose](https://github.com/docker/compose)

- YAML -> separa em chaves e valores seguido de '='
- version
- services (aplicação: ports: image: environment:(env))
- banco: (image: environment(env) volumes:)
- volumes: data{}
- docker-compose exec aplicação
- docker-compose up -> cria e inicia os contêineres
- docker-compose build -> realiza apenas a etapa de build das imagens que serão utilizadas
- docker-compose logs -> visualiza os logs dos contêineres
- docker-compose restart -> reinicia os contêineres
- docker-compose ps -> lista os contêineres
- docker-compose scale -> permite aumentar o número de réplicas de um contêiner
- docker-compose start -> inicia os contêineres
- docker-compose stop -> paralisa os contêineres
- docker-compose down -> paralisa e remove todos os contêineres e seus componentes como rede, imagem e volume

### IAC

- Iniciar a infra com código em docker é uma boa prática e pode servir como documentação

### Docker Swarm

- O Docker Swarm é um orquestrador.

- Docker swarm divide containers entre múltiplas máquinas de um mesmo clúster de modo automático. E reseta containers automaticamente em caso de falhas.
- O Docker Swarm é capaz de alocar e reiniciar containers de maneira automática.
- docker-machine create -> Criar máquinas já provisionadas para utilizar o Docker com a Docker Machine.
- Cluster é um conjunto de máquinas dividindo poder computacional.
- docker swarm init -> cria um cluster utilizando o Docker Swarm.

### Links com mais informações

Sumário Docker da [Casa do Código](https://www.casadocodigo.com.br/pages/sumario-docker)

Livro [Aprendendo Docker](https://www.novatec.com.br/livros/aprendendo-docker/) da NovaTec
