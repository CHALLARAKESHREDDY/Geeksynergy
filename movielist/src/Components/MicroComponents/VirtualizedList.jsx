import React from 'react';
import { List } from 'react-virtualized';
import ListItem from './ListItem'; // Import the memoized ListItem component

const VirtualizedList = ({ items }) => {
  const rowHeight = 300; // Height of each row/item
  const totalHeight = items.length * rowHeight; // Total height of the list

  return (
    <div style={{ height: totalHeight, overflow: 'hidden' }}>
      <List
        width={window.innerWidth}  // Adjust width to the window's width
        height={totalHeight} // Set height to total content height
        rowCount={items.length} // Total number of items
        rowHeight={rowHeight} // Height of each item
        rowRenderer={({ index, key, style }) => (
          <ListItem
            key={key}
            item={items[index]}
            style={style}
          />
        )}
      />
    </div>
  );
};

export default VirtualizedList;
