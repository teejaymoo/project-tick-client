#!/bin/bash

curl  "https://tic-tac-toe-api-development.herokuapp.com/show/${ID}"\
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
