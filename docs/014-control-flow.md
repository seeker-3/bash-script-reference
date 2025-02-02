# Control Flow `if else`

Control flow in bash works very differently to other languages. Instead of branching on `true` or `false`, bash will branch on the exit status of a command. A successful command with an exit status of `0` is "true", and a failed command with a non-zero exit status of `1..255` is "false".

## If Statements

```bash
if command1; then
  echo 'command1 succeeded!'
elif command2; then
  echo 'command1 failed but command2 succeeded!'
else
  echo 'command1 and command2 failed!'
fi
```

## For Loops

```bash
for i in 1 2 3; do
  echo "$i"
done
# Output:
# 1
# 2
# 3
```

<!-- TODO list comprehensions -->

## While Loops

```bash
while command; do
  echo 'command is succeeding'
done
```

## Case Statements

```bash
case string in
pattern1)
  echo 'string matches pattern1'
  ;;
pattern2)
  echo 'string matches pattern2'
  ;;
*) # All strings aka default case
  echo 'string does not match any pattern'
  ;;
esac
```

## Piping into Control flow (Magic)

```bash
for i in {1..10}; do
  printf "%03d\n" "$i"
done | command
# For loop output:
# 001
# 002
# 003
# ...
# 010
```

<!-- TODO you *can* pipe into for loops but while loops are better because for loops cause word splitting -->

```bash
command1 | while read -r line; do
  echo "$line"
done | command2
```

```bash
command1 | if condition; then
  true_command
else
  false_command
fi | command2
```

```bash
command1 | case string in
pattern1)
  pattern1_command
  ;;
pattern2)
  pattern2_command
  ;;
*)
  default_command
  ;;
esac | command2
```
