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

## Brace Expansions `prefix{middle1,middle2,}suffix`
