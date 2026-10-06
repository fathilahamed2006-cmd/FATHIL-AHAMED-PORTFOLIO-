#!/bin/sh
# Usage: ./set-domain.sh https://your-live-site.com   (no trailing slash)
[ -z "$1" ] && echo "Usage: $0 https://your-live-site.com" && exit 1
sed -i "s#https://YOUR-DOMAIN#$1#g" index.html sitemap.xml robots.txt && echo "Domain set to $1"
