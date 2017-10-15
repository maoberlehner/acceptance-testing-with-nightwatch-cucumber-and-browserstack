#!/bin/bash

browsers=( "ie" "edge" "safari" "firefox" "chrome" )

for i in "${browsers[@]}"
do
  # Kill obsolete `browserstack-local` instance.
  kill $(lsof -t -i:45691)

  # Run tests sequentially.
  node test/local.runner.js -c test/conf/browserstack.conf.js -e ${i}
done
