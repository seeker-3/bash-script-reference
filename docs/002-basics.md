# Basics

## Comments

Comments are lines that start with a `#` character. Bash does not support multi-line comments.

```bash
# This is a comment
```

## Variables

### Declaring Variables `VAR=x`

Declare variables using `=`. Variables cannot have spaces around the `=` sign.

```bash
X=1
```

### Referencing Variables `$VAR`

Reference a variable using the `$` sign.

```bash
X2=$X
```

Variables in bash are commonly written in upper snake case by convention

```bash
MY_VARIABLE=1
echo "$MY_VARIABLE" # 1
```

### Variable Interpolation

## Running Commands

By default, anything typed on a line will be executed as a command.

If you want to run a command that spans multiple lines, you can use a backslash `\` to escape the newline.
