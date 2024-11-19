# Reference Intro

Welcome! This is a reference guide for bash script. I love bash, bash is a very fun and powerful tool with a lot of hidden gems, but it is a difficult language to learn with the current resources available due to them being either inaccessible or incomplete. My goal with the guide is to cover all the features of bash and present them in a simple and enjoyable way along with some personal tips and best practices. I hope this guide will help you learn bash and discover some of its great features!

## What is Bash?

Bash is the scripting language of the bash shell. A lot of newcomers to the shell who are learning how to `cd` and `ls` may not realize that the shell is actually a full-fledged programming language with a lot of powerful features.

For instance:

```bash
if true; then echo 'red pill'; else echo 'blue pill'; fi
```

Can be run directly in the shell.

## Pros and Cons of Bash

### What is Bash Good at?

Bash is extremely good at running commands (duh), it's good at passing input to commands, piping input between commands, redirecting input and output to and and files, and working with the filesystem. It has a lot of concise and intuitive syntax for these operations.

It's good a pattern matching and simple regular expressions.

It's great at handling the success and failure of programs and performing additional actions accordingly since bash branches on the exit status of a command rather than bools.

Bash is great for automating workflows and writing simple command-line utilities. If you find that you are running the same 5 to 10 commands over and over again in sequence, this would be a great use case for a bash script.

### What is Bash Bad at?

Bash is a general purpose programming language, but it is not good at a lot of general purpose programming tasks like data-structures and algorithms such as sorting arrays or writing a linked list. Bash does not support multi-dimensional data-structures and its syntax for working with arrays is much clunkier than most languages nor does it support common array operations like push, pop, find, map, filter, etc.

The predominant data type in bash is strings. Bash does have good utilities for working with strings, but only to a point. bash is not a good option if you need fine-grained string manipulation.

Bash would be a very difficult choice for [Leet Code](https://leetcode.com/) or [Advent of Code](https://adventofcode.com/) problems, [though it is possible](https://www.youtube.com/playlist?list=PLQY19IEl_v9_ZtX1rrJ_Uamt4K4tqalqD).

In summary, bash is great if you are running a lot of commands and working with the filesystem, but it is not great if you are working with data structures or complex string manipulation.

## Shell vs. Shell Script

For the interactive shell I and a lot of other devs prefer [`zsh`](https://www.zsh.org/) or [`fish`](https://fishshell.com/) over `bash`. These shells have much nicer features like [syntax highlighting](https://github.com/zsh-users/zsh-syntax-highlighting), [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions), [better tab completion](https://github.com/zsh-users/zsh-completions). `zsh` is more customizable and configurable. However, when it comes to writing scripts, `bash` is the gold standard. It comes by default on most Unix systems and it has several IDE integrations available that make writing scripts nice.

## Magic vs. Pragmatic

This may be a spicy take, but I have a bit different approach when it comes to writing bash scripts. If you go on somewhere like stack overflow you will see a lot of esoteric code golf magic like `sed | awk | grep | cut` that try to cram an entire script into one. I do not like this approach, I prefer writing bash like it's a programming language and using native bash features when they are available for a few reasons:

1. less to remember/smaller surface area. Tools like `sed` and `awk` are themselves turing complete programming languages. If you want to use these tools effectively, you now need to know 3 languages instead of 1.
2. Readability. Bash features are a bit more verbose but I think that's a good thing. They are generally more explicit making the code easier to read, understand, and maintain.
3. IDE support/developer experience. If you are using `sed` or `awk`, you are embedding a separate language into bash within strings and do not get features like syntax highlighting, lsp integration, formatting, or autocomplete. You get a much better developer experience when you use native bash features.

I do use `sed` and `awk` from time to time, but I prefer to use native bash features when they are available. (I do like `grep` though).

A lot of people write these types of `sed | awk | grep | cut` commands because they are trying to use a concise syntax to do powerful operations directly on the command line. If I am doing anything more powerful than `do_this && then_that`, I will probably open a file and write a script.

## What This Guide Assumes

This guide assumes you are marginally familiar with the command line and you know how to do things like navigate the filesystem, list files, update the filesystem, running commands, etc.

<!-- ## Caveats -->

## Helpful References

- [Official bash manual](https://www.gnu.org/software/bash/manual/bash.html): everything you could ever want to know about bash but in a very dry and technical format
- [Bash cheatsheet](https://devhints.io/bash): a quick reference for **most** bash features
<!-- - [RehanSaeed Bash-Cheat-Sheet](https://github.com/RehanSaeed/Bash-Cheat-Sheet) -->
