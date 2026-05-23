from pathlib import Path
from io import BytesIO

contents = b"BT\n/F1 18 Tf\n72 760 Td\n(Ammar Ahmad) Tj\nT* (Full Stack Developer | Software Engineer) Tj\nT* (Email: ammar@example.com | Phone: +123 456 7890) Tj\nT* (Location: Your City, Country) Tj\nT* 24 TL\nT* (Profile:) Tj\nT* (Experienced professional with a strong background in building scalable web applications, APIs, and modern UI experiences.) Tj\nT* 18 TL\nT* (Experience:) Tj\nT* (- Built full-stack applications using React, Next.js, Node.js, and PostgreSQL.) Tj\nT* (- Developed responsive designs and optimized performance for fast-loading user interfaces.) Tj\nT* (- Collaborated with cross-functional teams to deliver high-quality software on time.) Tj\nT* 24 TL\nT* (Skills:) Tj\nT* (React, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js, Express, SQL) Tj\nT* 24 TL\nT* (Education:) Tj\nT* (Bachelor of Science in Computer Science) Tj\nET\n"
objects = [
    b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>\nendobj\n",
    b"4 0 obj\n<< /Length %d >>\nstream\n" % len(contents) + contents + b"endstream\nendobj\n",
    b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
]

out = BytesIO()
out.write(b"%PDF-1.4\n")
offsets = []
for obj in objects:
    offsets.append(out.tell())
    out.write(obj)
xref_start = out.tell()
out.write(b"xref\n0 %d\n" % (len(objects) + 1))
out.write(b"0000000000 65535 f \n")
for offset in offsets:
    out.write(b"%010d 00000 n \n" % offset)
out.write(b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % ((len(objects) + 1), xref_start))
Path("public/resume.pdf").write_bytes(out.getvalue())
print("wrote public/resume.pdf")
