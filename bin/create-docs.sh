#!/bin/sh

cd ~/atinfo/www/timetm/docs/bin

rm -rf ../sami/.cache/*

php sami.phar update sami.php

php apigen.phar generate --title 'TimeTM developers documentation' -s ../../htdocs/src/ -d ../apigen/

