#!/bin/bash
composer install --no-interaction --no-progress --no-suggest --prefer-dist

npm install --no-progress

/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf