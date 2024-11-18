# Control Flow

Control flow in bash works very differently to other languages. Instead of branching on `true` or `false`, bash will branch on the exit status of a command. A successful command with an exit status of `0` is `true`, and a failed command with a non-zero exit status of `1..255` is `false`.

## If Statements

```bash
if command1; then
  echo 'command1 succeeded'
elif command2; then
  echo 'command2 succeeded'
else
  echo 'command1 and command2 failed'
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

## While Loops

```bash
while command; do
  echo 'command succeeded'
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
*)
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

```bash
command | while read -r line; do
  echo "$line"
done
```

```bash
command1 | if condition; then
  true_command
else
  false_command
fi | command2
```
