# Inves Technology | Apollo Template

![main](https://github.com/inves-technology/inves-template-apollo/actions/workflows/main-lint-and-tests.yml/badge.svg)

A simple Hello World Template Apollo Lambda function featuring:

- Apollo GraphQL implementation with Playground
- Koa + Nodemon for easy local testing & hot reloads
- Lambda specific Koa config (plus examples of how do do binary files in Lambda)
- Eslint + Prettier Config
- .nvmrc for pegging nvm level
- tsconfig.json & webpack.config
- Terraform for AWS Deployment
- Seperation of Dev & Prod config & deployments
- Dockerfile & docker-compose for doing local Docker dev
- Logger & Config added to Koa context

## Create project from template

**NB** There is a difference in how sed works on MAC vs Ubuntu, so we're listing two versions for now, until we can find a platform-independent solution

### Ubuntu version

```sh
# Set Service Name var:
SERVICENAME=hello-world-apollo-from-template
AWSPROFILE=inves-technology
AWSREGION=eu-west-1
# Init and copy template from github:
mkdir $SERVICENAME && \
  git clone https://github.com/inves-technology/inves-template-apollo.git $SERVICENAME && \
  cd "$_" && \
  rm -rf .git && \
  grep -rl inves-template-apollo . --exclude=README.md | xargs sed -i 's/inves-template-apollo/'"$SERVICENAME"'/g' && \
  grep -rl inves-technology . --exclude=README.md | xargs sed -i 's/inves-technology/'"$AWSPROFILE"'/g' && \
  grep -rl af-south-1 . --exclude=README.md | xargs sed -i 's/af-south-1/'"$AWSREGION"'/g' && \
  git init && git checkout -b main && git add . && git commit -am "🎉 Initial Commit" && \
  make yarn && make init && \
  code .
```

### Mac Version

```sh
# Set Service Name var:
SERVICENAME=hello-world-apollo-from-template
AWSPROFILE=inves-technology
AWSREGION=eu-west-1
# Init and copy template from github:
mkdir $SERVICENAME && \
  git clone https://github.com/inves-technology/inves-template-apollo.git $SERVICENAME && \
  cd "$_" && \
  rm -rf .git && \
  grep -rl inves-template-apollo . --exclude=README.md | LC_ALL=C xargs sed -i '' -e 's/inves-template-apollo/'"$SERVICENAME"'/g' && \
  grep -rl inves-technology . --exclude=README.md | LC_ALL=C xargs sed -i '' -e 's/inves-technology/'"$AWSPROFILE"'/g' && \
  grep -rl af-south-1 . --exclude=README.md | LC_ALL=C xargs sed -i '' -e 's/af-south-1/'"$AWSREGION"'/g' && \
  git init && git checkout -b main && git add . && git commit -am "🎉 Initial Commit" && \
  make yarn && make init && \
  code .
```

## Usage

To run:

```sh
# Locally
make run 
# Docker
make build up
make run
```

To deploy

```sh
# Locally (Prerequisites: Terraform > 1.2.2)
make init
make env=dev deploy
# Docker 
make up
make env=dev deploy
```

## To Do

- Fix the old way of sending aws credentials into Docker
- Try out VsCode Docker Remote dev again
  
## Contributors

| [![Kenny Inggs][kinggs_avatar]][kinggs_homepage] | [![Braam Genis][braamgenis_avatar]][braamgenis_homepage] | [![Jen Wynne][jenwynne_avatar]][jenwynne_homepage] |
| :----------------------------------------------: | :------------------------------------------------------: | :------------------------------------------------: |
|          [Kenny Inggs][kinggs_homepage]          |            [Braam Genis][braamgenis_homepage]            |           [Jen Wynne][jenwynne_homepage]           |

[kinggs_homepage]: https://github.com/kinggs
[kinggs_avatar]: https://github.com/kinggs.png?size=150
[braamgenis_homepage]: https://github.com/braamgenis
[braamgenis_avatar]: https://github.com/braamgenis.png?size=150
[jenwynne_homepage]: https://github.com/jenwynne
[jenwynne_avatar]: https://github.com/jenwynne.png?size=150
