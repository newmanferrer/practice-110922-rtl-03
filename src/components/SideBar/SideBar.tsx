interface ISideBarProps {
  items: {
    name: string;
    href: string;
  }[];
}

export const SideBar = ({ items }: ISideBarProps) => {
  return (
    <div>
      {items &&
        items.map(item => (
          <div key={item.href}>
            <a href={item.href}>{item.name}</a>
          </div>
        ))}
    </div>
  );
};
