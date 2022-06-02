import React, { useEffect, useState } from "react";

type Item = {
  url: string;
  title: string;
  items?: Item[];
};
const getIds = (items: Item[]) => {
  return items.reduce((acc: string[], item: Item) => {
    if (item.url as string) {
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
};

const useActiveId = (itemIds: string[]) => {
  const [activeId, setActiveId] = useState(`test`);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -40% 0%` }
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id) as HTMLElement);
    });
    return () => {
      itemIds.forEach((id) => {
        observer?.unobserve(document.getElementById(id) as HTMLElement);
      });
    };
  }, [itemIds]);
  return activeId;
};

const renderItems = (items: Item[], activeId: string) => {
  return (
    <div className="toc-container">
      {items.map((item) => {
        return (
          <div key={item.url}>
            <a
              href={item.url}
              className={`${
                activeId === item.url.slice(1) ? "active" : "not-active"
              }`}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId)}
          </div>
        );
      })}
    </div>
  );
};

const TableOfContents = ({ items }: { items: Item[] }) => {
  const idList = getIds(items);
  const activeId = useActiveId(idList);

  return (
    <aside>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <h2>Table of Contents</h2>
        {renderItems(items, activeId)}
      </nav>
    </aside>
  );
};

export default TableOfContents;
