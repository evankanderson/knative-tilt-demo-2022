import React from 'react';

export type Item = {
  name: string;
  count: number;
};

export type AllItems = {
  items: Item[];
};

export const MessageItem: React.FC<Item> = item => {
  return (
    <div className="mdc-card item-card">
      <div className="Card--text">
        <div className="Card--title">{item.name}</div>
        <div className="Card--count">{item.count}</div>
      </div>
    </div>
  );
};

export const MessageList: React.FC<AllItems> = itemList => {
  return (
    <div>
      <h2>API Items</h2>
      <div className="item-flexbox">
        {itemList.items.map((i: Item) => {
          return <MessageItem name={i.name} count={i.count} />;
        })}
      </div>
    </div>
  );
};
