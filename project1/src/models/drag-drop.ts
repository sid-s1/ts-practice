// Drag and Drop interfaces
namespace App {
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }
    export interface DragTarget {
        dragOverHandler(event: DragEvent): void; // permit the drop
        dropHandler(event: DragEvent): void; // handle the drop
        dragLeaveHandler(event: DragEvent): void; // some visual feedback to the user
    }
}