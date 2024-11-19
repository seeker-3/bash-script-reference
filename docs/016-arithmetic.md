# Arithmetic `((x+=y))`

Bash only supports integer arithmetic. Bash uses signed 64-bit integers. The `(( ))` construct is used to evaluate arithmetic expressions. The `$` is not required to use variables inside the expression.

- `-` `+` unary minus and plus
- `+` `-` binary addition and subtraction
- `*` `/` `%` multiplication, division, remainder
- `**` exponentiation
- `<<` `>>` left and right bitwise shifts
- `~` bitwise NOT
- `&` bitwise AND
- `|` bitwise OR
- `^` bitwise exclusive OR
- `!` logical NOT
- `&&` logical AND
- `||` logical OR
- `==` `!=` equality and inequality
- `<=` `>=` `<` `>` comparison
- `condition ? true_expr : false_expr` ternary operator
- `=` `+=` `-=` `*=` `/=` `%=` `<<=` `>>=` `&=` `^=` `|=` assignment
- `id++` `id--` variable post-increment and post-decrement
- `++id` `--id` variable pre-increment and pre-decrement
- `expr1, expr2` comma

## Expressions

```bash
X=5
Y=$((X + 5))
echo "$Y"       # 10
echo $((Y * 2)) # 20
```

## Assignments

```bash
X=5
((X += 5))
echo "$X" # 10
```

## Conditionals

```bash
X=5
if ((X == 5)); then
  echo 'X is 5'
fi
```

## C-Style For Loops

```bash
for ((i = 0; i < 5; i++)); do
  echo "$i"
done
```

## Strings in Arithmetic

Recursive resolution

```bash
VAR1=VAR2
VAR2=VAR3
VAR3=VAR4
VAR4=3
# VAR1 -> VAR2 -> VAR3 -> VAR4 -> 3
echo $((VAR1 + 5)) # 8
```

The empty string is treated as 0

```bash
EMPTY=
echo $((EMPTY + 5)) # 5
```
