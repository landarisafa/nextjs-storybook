"use client";
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export default function Dnd() {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsBrowser(true);
        }
    }, []);

    const data = [
        {
            id: 'section-1',
            title: 'Section 1',
        },
        {
            id: 'section-2',
            title: 'Section 2',
        },
        {
            id: 'section-3',
            title: 'Section 3',
        },
    ];

    return (
        <DragDropContext>
            <div>
                {isBrowser ? (
                    <Droppable droppableId="droppable">
                        {(provided: any) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {data.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided: any) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {item.title}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ) : null}
            </div>
        </DragDropContext>
    );
};