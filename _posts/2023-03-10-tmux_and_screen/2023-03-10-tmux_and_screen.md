---
title: How to run your code without fixing at your terminal
commentable: true
date: 2023-03-10
modified: false
Edit: 2023-02-16
mathjax: true
mermaid: true
tags: notes
categories: study notes 
description: this paper introduce the basic usage of tmux and screen
---


# introduction

We may encounter a situation that when we want to run a code on the server, it takes a long period of time to finish. However, if we want to shut down the server, the code will be killed. 

Fortunately, there are two ways to solve the problem. The first is `tmux` command and the second is `screen` command.

This blog will introduce the usage of two commands.


# screen

## show

```
screen -ls
```

This command is to show the status of screens.

<img src="https://raw.githubusercontent.com/adoptedirelia/pictures_of_posts/main/tmux_and_screen/pic1.png" width="100%"> 

> btw, 29281 means {pid}, zdj means task_name

## create

```
screen -S {task_name}

screen 
```

the first command can create a new screen on the terminal with your task_name for recognizing.

The second command can create a new screen on the terminal with fault name.

## detach

```
screen -d {pid}

screen -d {task_name}
```

## reattach

```
screen -r {pid}

screen -r {task_name}
```

## delete task

if you want to delete a task, what you need to do is reattach task and input `exit` in the terminal window.

# tmux

## show

```
tmux ls
```

## create

```
tmux

tmux new -s {session_name}
```

## detach

```
tmux detach
```

## reattach

```
tmux attach -t {session_name}
```

## delete

```
tmux kill-session -t {session_name}
```