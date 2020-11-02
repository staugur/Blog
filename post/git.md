---
title: Git
date: 2020-10-21
publish: false
---

## 关于git的使用实践


### 1、 .gitconfig

```bash
$ cat ~/.gitconfig
[user]
    name = Hiroshi.tao
    email = me@tcw.im
[color]
    ui = true
[alias]
    st = status
    ci = commit
    co = checkout
    br = branch
    unstage = reset HEAD
    last = log -1
    logs = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
    lg = log --color --pretty=oneline --abbrev-commit
[push]
    default = simple
[core]
    editor = vim
```


### 2、 .gitmessage

```bash
$ cat ~/.gitmessage

#
# head: <type>(<scope>): <subject>
# - type: feat, fix, docs, style, refactor, test, chore, perf
# - scope: can be empty (eg. if the change is a global or difficult to assign to a single component)
# - subject: start with verb (such as 'change'), 50-character line, english
#
# body: 72-character wrapped. This should answer:
# * Why was this change necessary?
# * How does it address the problem?
# * Are there any side effects?
#
# footer: 
# - Include a link to the ticket, if any.
# - BREAKING CHANGE
#

$ git config --global commit.template ~/.gitmessage

$ cat ~/.vimrc 
autocmd Filetype gitcommit setlocal spell textwidth=72
```


### 3、 gpg

```bash
$ gpg --gen-key
$ gpg --list-keys --keyid-format LONG
$ gpg --armor --export Your_GPG_ID
$ git config --global commit.gpgsign true
$ git config --global user.signingkey Your_GPG_ID
```
