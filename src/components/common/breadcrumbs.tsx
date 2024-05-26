import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathComponents = (pathname?.split("/") || []).filter(Boolean);
  return (
    <div className="breadcrumbs gap-4 flex flex-row">
      <a className="subtitle">Home</a>
      {pathComponents.map((component, idx) => {
        const link = pathComponents.slice(0, idx + 1).join("/");
        return (
          <div key={idx}>
            <span className="hue-2-primary mr-3"> / / </span>
            <a className="subtitle" href={`/${link}`}>
              {component.slice(0, 1).toUpperCase() + component.slice(1)}
            </a>
          </div>
        );
      })}
    </div>
  );
}
