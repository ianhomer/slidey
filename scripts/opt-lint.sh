#!/usr/bin/env bash

yarn -D add                                                      \
  eslint eslint-config-prettier eslint-plugin-simple-import-sort \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser     \
  prettier format-package npm-run-all
