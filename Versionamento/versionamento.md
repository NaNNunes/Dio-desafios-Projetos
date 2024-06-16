# Versionamento

## Comandos básico para controle de versão
- git config _--global user._
    - _name_ = Define o user global responsável pelos commits realizados na maquina registrada
    - _email_ = Define email de user, que terá acesso ao respositório remoto.

- git init 
    Inicia o subdiretório e **repositório git**, responsável pelo reconhecimento e armazenamento de 
    arquivos no repositório.

- git add _(file)_
    Adiciona arquivos não rastredos ou modificados ao staged, estagio de preparo para registro no repositório.

- git commit _-m "msg"_
    Encaminha arquivos do staged para o repositório.

- git remote add (origin/apelidoURL) (url)
    Vincula o repositório remoto ao repositório local

- git push
    Envia commits ao repositório remoto

- git pull
    Trás atualizações do repositório remoto ao repositório local
