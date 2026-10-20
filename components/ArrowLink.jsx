import Link from "next/link";

export default function ArrowLink({ href, children, light = false, external = false }) {
  const cls = `arrow-link${light ? " arrow-link-light" : ""}`;
  if (external) return <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span></a>;
  return <Link className={cls} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}
