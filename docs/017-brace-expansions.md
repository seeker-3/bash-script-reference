# Brace Expansions

## Ranges `{start..stop..step}`

```bash
echo {1..5} # 1 2 3 4 5
```

```bash
for i in {1..5}; do
  echo "$i"
done
```

```bash
echo {0..10..2} # 0 2 4 6 8 10
```

```bash
echo x{1..5} # x1 x2 x3 x4 x5
```

## Brace Expansions `prefix{middle1,middle2,}suffix`

Will expand the prefix and suffix with each value inside the braces. `,,` will expand to the prefix and suffix without a value in between.

```bash
echo prefix-{middle1,middle2,,middle4}-suffix # prefix-middle1-suffix prefix-middle2-suffix prefix--suffix prefix-middle4-suffix
```

```bash
cp file.txt{,.bak} # Expands to `cp file.txt file.txt.bak`
```
