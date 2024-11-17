# Subshells

## Subshells `()`

## Command Substitution `$(...)`

```bash
CAPTURED=$(command)
```

## Process Input Substitution `<(...)`

```bash
diff <(command1) <(command2)
```

## Process Output Substitution `>(...)`

```bash
command | tee >(command1) >(command2) >(command3) > >(command4)
```

## Command Groups `{}`
