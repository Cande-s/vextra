
A = 160        # horizontal amplitude
H = 230        # half-period height
spacing = 18   # pixels between lines
W = 1200       # canvas width
CANVAS_H = 920 # canvas height

# Colors — brand palette
LINE  = "#284139"   # Emerald Green
KHAKI = "#F8D794"   # Creased Khaki accent (very subtle)

paths = []
d = -A
i = 0
while d <= W:
    parts = [f"M {A+d} 0"]
    y = 0
    seg = 0
    while y < CANVAS_H:
        if seg % 2 == 0:
            xs, xe = A + d, d
        else:
            xs, xe = d, A + d
        cp1x, cp1y = xs, y + int(H * 0.55)
        cp2x, cp2y = xe, y + int(H * 0.45)
        parts.append(f"C {cp1x} {cp1y} {cp2x} {cp2y} {xe} {y+H}")
        y += H
        seg += 1

    stroke = KHAKI if (i % 9 == 4) else LINE
    opacity = "0.10" if stroke == KHAKI else "0.75"
    sw = "0.55" if stroke == LINE else "0.45"
    paths.append(
        f'<path d="{" ".join(parts)}" stroke="{stroke}" '
        f'stroke-width="{sw}" fill="none" opacity="{opacity}"/>'
    )
    d += spacing
    i += 1

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" '
    f'viewBox="0 0 {W} {CANVAS_H}">\n'
    + "\n".join(paths)
    + "\n</svg>"
)

out = r"assets\pattern.svg"
with open(out, "w", encoding="utf-8") as f:
    f.write(svg)

print(f"Done — {len(paths)} lines written to {out}")
