# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# npm run docs:build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# # 如果是发布到自定义域名
# echo 'dev.xukaiyyds.cn' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:xukaiyyds/xukaiyyds.github.io.git master:gh-pages

# cd -

@echo off
cd C:\Users\admin\Documents\blog\hexo-plog
git add .
git commit -m "update vuepress-blog"
git push origin master
