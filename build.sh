#!/usr/bin/env bash
# Smart RTL Aligner — packaging script
#
# Builds distributable, store-ready .zip packages for:
#   - Chrome / Edge / other Chromium browsers (uses manifest.json)
#   - Firefox (uses manifest.firefox.json)
#
# Usage:
#   ./build.sh
#
# Output:
#   dist/smart-rtl-aligner-chrome.zip
#   dist/smart-rtl-aligner-firefox.zip

set -euo pipefail
cd "$(dirname "$0")"
ROOT_DIR="$(pwd)"

VERSION=$(node -e "console.log(require('./manifest.json').version)" 2>/dev/null || grep -m1 '"version"' manifest.json | sed -E 's/.*"version":\s*"([^"]+)".*/\1/')

DIST_DIR="dist"
STAGE_DIR="$(mktemp -d)"

echo "Building Smart RTL Aligner v${VERSION}"
rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

SHARED_FILES=(content.js popup.html popup.js rtl.css icons)

package() {
  local browser_name="$1"
  local manifest_file="$2"
  local out_dir="$STAGE_DIR/$browser_name"

  mkdir -p "$out_dir"
  cp "$manifest_file" "$out_dir/manifest.json"
  for f in "${SHARED_FILES[@]}"; do
    cp -r "$f" "$out_dir/"
  done

  local zip_path="${ROOT_DIR}/${DIST_DIR}/smart-rtl-aligner-${browser_name}-${VERSION}.zip"
  (cd "$out_dir" && zip -qr "$zip_path" .)
  echo "  -> ${DIST_DIR}/smart-rtl-aligner-${browser_name}-${VERSION}.zip"
}

package "chrome" "manifest.json"
package "firefox" "manifest.firefox.json"

rm -rf "$STAGE_DIR"
echo "Done."
