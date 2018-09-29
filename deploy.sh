#!/usr/bin/env sh

# abort on errors
set -e

# Variables can be overriden if already defined.
GITURL=`git config remote.origin.url`
: ${GH_EMAIL=`git config user.email`}
: ${GH_NAME=`git config user.name`}

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'pyramido.ca' > CNAME

git init

git config user.email "$GH_EMAIL"
git config user.name "$GH_NAME"

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f $GITURL master:gh-pages

cd -
