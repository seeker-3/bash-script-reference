# Special Parameters `$@`

Special parameters are readonly variables that are set by the shell. They are used to read positional arguments to the script and to introspect processes.

## Command Line Arguments

### Command Line Arguments as an Array `$@`

`$@` gets all the arguments passed to the script as separate strings.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo "$@" # 1 2 3
```

`@` is an array, so you can use any syntax listed in the [array](arrays) section to access the elements.

From the cli

```bash
bash script.bash 1 2 3 4 5
```

In the script using an array slice

```bash
echo "${@:2:3}" # 2 3 4
```

### Iterating Over Command Line Arguments `for ARG; do`

If you use a for loop with no `in` clause, it will iterate over the cli arguments by default.

From the cli

```bash
bash script.bash 1 2 3
```

The script

```bash
for ARG; do
  echo "$ARG"
done
# Output:
# 1
# 2
# 3
```

### Command Line Arguments as a String `$*`

`$*` gets all the arguments passed to the script as a single string.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo "$*" # 1 2 3
```

### Get the Number of Command Line Arguments `$#`

`$#` gets the number of arguments passed to the script.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo $# # 3
```

### Access Individual Command Line Arguments `$n`

`$n` gets the nth argument passed to the script.

From the cli

```bash
bash script.bash 1 2 3 4 5
```

In the script using an array slice

```bash
echo "$1 $4 $5" # 1 4 5
```

### Get the Name of the Script `$0`

`$0` gets the name of the script.

From the cli

```bash
bash script.bash 1 2 3
```

In the script

```bash
echo "$0" # script.bash
```

<!-- TODO Get the set options `$-` -->

## Process Introspection

`$?` gets the exit status of the last command.

```bash
(exit 42)
echo $? # 42
```

This can be useful if you are checking for a specific error status, however most of the time you should use `if` statements to check if a command failed or not.

- `$$` gets the process id of the current script.
- `$!` gets the process id of the last command run in the background.
