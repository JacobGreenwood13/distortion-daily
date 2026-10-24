#!/bin/bash
# Reinstall the PDF build toolchain. VM rotations wipe user site-packages,
# so run this before any collection/article PDF build if imports fail.
# (Learned 2026-10-16: pdfminer broke on missing cryptography, pypdf gone.)
set -e
pip3 install --user --break-system-packages --quiet \
    pdfminer.six reportlab pypdf cryptography
python3 -c "import pdfminer, reportlab, pypdf; print('PDF toolchain ok')"
