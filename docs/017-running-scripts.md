# Running Scripts

## Running Scripts as Files

```bash
bash script.bash
```

```bash
chmod u+x script.bash
./script.bash
```

## Running Scripts as Strings

### Running Script Strings through STDIN

```bash
bash <script.bash
echo 'echo hello world!' | bash # hello world
bash <<<'echo hello world!' # hello world
cat script.bash | bash
curl -fsSL https://example.com/script.bash | bash
```

### Running Script Strings with `bash -c`

```bash
bash -c "echo Hello world!"
bash -c "$(curl -fsSL https://example.com/script.bash)"
```

### Running Script Strings with Process Substitution `bash <(...)`

```bash
bash <(cat script.bash)
bash <(curl -fsSL https://example.com/script.bash)
```
