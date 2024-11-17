# Strict Mode

```bash
set -euo pipefail
```

```bash
command || STATUS=$?

case $STATUS in
0) echo "Success" ;;
1) echo "Failure" ;;
*) echo "Unknown" ;;
esac
```
