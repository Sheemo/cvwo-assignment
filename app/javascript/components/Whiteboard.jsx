import React, { useState, useRef } from "react";
import EventCard from "../components/EventCard";
import DropWrapper from "../components/DropWrapper";
import Category from "../components/Category";
import NewTaskWindow from "../components/NewTask";
import { data, statuses } from "../test_data";

const Whiteboard = () => {
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <div className={"rowrow"}>
      {statuses.map((s) => {
        return (
          <div key={status} className={"col-wrapper"}>
            <div className={"col-header-wrapper"}>
              <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
              <p className={"col-header"} onClick={onOpen}>+</p>
            </div>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Category>
                {items
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => (
                    <EventCard
                      key={i.id}
                      item={i}
                      index={idx}
                      moveItem={moveItem}
                      status={s}
                    />
                  ))}
              </Category>
            </DropWrapper>
            <NewTaskWindow onClose={close} show={show} />
          </div>
        );
      })}
    </div>
  );
};

export default Whiteboard;
