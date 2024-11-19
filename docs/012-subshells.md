# Subshells

## Subshells `()`

```bash
(
  command1
  command2
  command3
)
```

<!-- TODO using cd -->

## Command Substitution `$(...)`

```bash
CAPTURED=$(command)
```

<!-- `` syntax -->

## Process Substitution

Process substitutions essentially let you use subshells as anonymous files. Where a command would typically take a file argument `command file.txt`, process substitution lets you use subcommands as the file `command <(subcommand)`.

### Input Process Substitution `<(...)`

Input process substitution lets you use the output of a subshell as an input file to a command. This is commonly used with `diff` to compare the output of two commands.

```bash
diff <(command1) <(command2)
```

Here is a full example comparing the output of a problem to a solution and sorting the output before comparing.

```bash
diff <(
  ./solution | sort
) <(
  g++ -o problem problem.cpp && ./problem | sort
)
```

Input process substitutions can also be used if you want to avoid using a pipe for whatever reason. For instance, if you want to convert the output of a command to an array, you cannot use a pipe because pipes create subshells and the variable will not persist into the parent scope.

This won't work ❌

```bash
echo 1 2 3 | read -ra ARRAY
echo "${ARRAY[@]}" # empty
```

Instead we can use process substitution to create an anonymous file and pass it to stdin via `<`:

This works ✅

```bash
read -ra ARRAY < <(echo 1 2 3)
echo "${ARRAY[@]}" # 1 2 3
```

### Output Process Substitution `>(...)`

Output process substitution lets you use the output file of a command as the input to a subshell. This is less commonly used, but this can be used with `tee` to fork the output of a command to multiple commands. `tee` normally accepts a list of files, writing the output to each file, and printing the output to stdout: `tee fil1 file1 file2`.

```bash
command | tee >(command1) >(command2) >(command3) > >(command4)
```

## Command Groups `{}`

```bash
{
  command1
  command2
  command3
}
```
