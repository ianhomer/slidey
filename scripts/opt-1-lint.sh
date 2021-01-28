#!/usr/bin/env bash

set -e

yarn -D add                        \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser        \
  eslint eslint-config-prettier    \
  eslint-plugin-simple-import-sort \
  format-package                   \
  husky                            \
  npm-run-all                      \
  lint-staged                      \
  prettier
